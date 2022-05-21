import {useSession} from "next-auth/react";
import Header from './header';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// if there is a session let's print the user name
// if there is not a sessions let's print the public version of this username
let userData

function dynamicUserHome(){
    const { data: session } = useSession();
    if(session){
        // get user name
        const username = session.login
        const id = session.id
        const accessToken = session.accessToken
        return (
            <Header />
        )
    }

    return (
        <Header />
    )



}





export default dynamicUserHome;