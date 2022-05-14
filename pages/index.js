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
