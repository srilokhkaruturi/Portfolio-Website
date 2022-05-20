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
    callbacks: {
        async jwt({ token, account }) {
        // Persist the OAuth access_token to the token right after signin
        if (account) {
            token.accessToken = account.access_token
        }
        return token
        },

        async signIn({ user, account, profile, email, credentials }) {


            //something wrong with following code gives error if uncommented
            /* 
            // get user information from github
            let githubInformation = await axios.get("/api/auth/getGithubInfo", {timeout: 10000}).catch(err => {throw new error(err.name)});

            if(!githubInformation){
            throw new error("Could not get github infromation [index.js][addUserToDatabase]")
            }

            githubInformation = githubInformation.data
            // define user name
            const userName = githubInformation.login
            */
            
            

            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
              return "/authorized"
            } else {
              // Return false to display a default error message
              return "/unauthorized"
              // Or you can return a URL to redirect to:
              // return '/unauthorized'
            }
        }
        
        
    },
    debug:true,
});
