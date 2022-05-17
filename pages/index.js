/*
File name:  index.js
Description: 

This file contains the code for the beginning of our actual website.
The way this page works is to fetch the data from the server about the user
If the session of the user matches the user website, than that user is allowed to edit
However, if this is not true than our user will only access to read only public items


*/

import Header from './header'
import {useSession, signIn, signOut } from "next-auth/react"
import GitHub from 'next-auth/providers/github';
import {useRouter} from 'next/router'
import Skeleton from '@mui/material/Skeleton';
export default function Home() {
  const { data: session } = useSession();
  const router = useRouter()
  if(session){
    
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
