import Header from './header'
import {useSession, signIn, signOut } from "next-auth/react"
import GitHub from 'next-auth/providers/github';
import {useRouter} from 'next/router'

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter()
  if(session){
   
    return (
      
        <>
        <button onClick={() => signOut()}>Sign Out</button>
        <Header />
        </>
    )
  }
  return(
    <>
        
        <button onClick={() => signIn("github", {callbackUrl: router.query.callbackUrl})}>Sign in with Github</button>
        <Header />
        </>
  )

}
