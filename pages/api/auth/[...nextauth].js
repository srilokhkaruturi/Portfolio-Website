/*
File: [..nextauth].js
Description: This file will uses nextAuth to handle the requests, res of any OAuth...
*/
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github"
import axios from "axios"

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret : process.env.GITHUB_CLIENT_SECRET,
            
        }),
    ],
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
        // Persist the OAuth access_token to the token right after signin
        if(user?.id){
            token.id = user.id
        }

        if(user?.name){
            token.name = user.name
        }

        if (account) {
            token.accessToken = account.access_token
        }

        return token
        },

        async signIn({ user, account, profile}) {

            if(profile?.login){
                return "/"+profile.login
                return true
            }else{
                return "/"
            }
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            session.id = token.id
            session.name = token.name

            return session
        },
    },
    debug:true,
});
