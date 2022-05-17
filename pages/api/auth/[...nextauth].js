/*
File: [..nextauth].js
Description: This file will uses nextAuth to handle the requests, res of any OAuth...
*/
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github"

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret : process.env.GITHUB_CLIENT_SECRET,
            
        }),
    callbacks: {
        async jwt({ token, account }) {
        // Persist the OAuth access_token to the token right after signin
        if (account) {
            token.accessToken = account.access_token
        }
        return token
        }
        
    }
    ],
    debug:true,
});
