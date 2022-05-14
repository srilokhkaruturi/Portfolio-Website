import Header from './header'
import {useSession, signIn, signOut } from "next-auth/react"
import GitHub from 'next-auth/providers/github';

export default function Home() {
  const { data: session } = useSession();

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
        const router = useRouter()
        <button onClick={() => signIn("github", {callbackUrl: router.query.callbackUrl})}>Sign in with Github</button>
        <Header />
        </>
  )

}
