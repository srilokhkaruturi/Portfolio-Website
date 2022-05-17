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
    ],
    debug:true,
});
