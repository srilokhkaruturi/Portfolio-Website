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

    return (
      
        <>
        <Header />
        <h1>Welcome {session.login} to pro-fol.io landing page!</h1>
        <Skeleton variant="rectangular" animation="wave" height={1000}/>

        </>
    )
  }
  return(
        <>
        <Header/>
        <h1>Welcome to fol.io landing page!</h1>
        <Skeleton variant="rectangular" animation="wave" height={1000}/>
        </>
  )

}

