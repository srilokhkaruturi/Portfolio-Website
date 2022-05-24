/*
File: _app.js 
Description: This file is the root start of our program. We simple allow a sessionprovider to allow a user's session throughout the entire program
*/
 
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps : {session, ...pageProps}}) {
  return( 
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;