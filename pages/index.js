/*
File name:  index.js
Description: 

This file contains the code for the beginning of our actual website.
The way this page works is to fetch the data from the server about the user
If the session of the user matches the user website, than that user is allowed to edit
However, if this is not true than our user will only access to read only public items


*/

import Header from './header';
import {useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import {useRouter} from 'next/router'
import Skeleton from '@mui/material/Skeleton';
export default function Home() {
  const { data: session } = useSession();
  if(session){

    // add user to database if user does not exist

    addUserToDatabase().then((message) => {console.log(message)}).catch((err) => {console.log(err)})
    return (
      
        <>
        <Header />
        <Skeleton variant="rectangular" animation="wave" height={1000}/>

        </>
    )
  }
  return(
        <>
        <Header/>
        <Skeleton variant="rectangular" animation="wave" height={1000}/>
        </>
  )

}

const addUserToDatabase = async () => {
  // try to add the user to the database
  try{
    // get user information from github
    let githubInformation = await axios.get("/api/auth/getGithubInfo", {timeout: 10000}).catch(err => {throw new error(err.name)});

    if(!githubInformation){
      throw new error("Could not get github infromation [index.js][addUserToDatabase]")
    }

    githubInformation = githubInformation.data
    // define user name
    const userName = githubInformation.login

    // defining id
    const userID = githubInformation.id

    console.log("userName: " + JSON.stringify(userName));

    console.log("userID: " + JSON.stringify(userID));


    // create user from using own api
    const CREATE_USER_URL = "/api/c/createUser"

    // define the body of the response
    var body = {name:userName, _id:userID}
    // add 
    response = await axios.post(CREATE_USER_URL, body, {timeout: 5000}).catch(err=>{throw new error(err)})
    console.log(response)
    if(response.status == "400"){
      return Promise.reject("ERROR: Could not add user. Likely user exists")
    }
    return Promise.resolve("SUCCESS: Added new user")
  }catch(error){
    return Promise.reject("ERROR: COULD NOT ADD USER")
  }
  return
}