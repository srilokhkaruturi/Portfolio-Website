import {useSession} from "next-auth/react";
import Header from './header';
import Button from '@mui/material/Button'
import React from "react";
import axios from "axios";
import {useRouter} from 'next/router';
import TextField from '@mui/material/TextField';
import { useFormControl } from '@mui/material/FormControl';
// if there is a session let's print the user name
// if there is not a sessions let's print the public version of this username

// define page user name 

// define user data of the page 
function dynamicUserHome({SITE_USER_DATA, SITE_USERNAME}){
    const { data: session } = useSession();
    if(session){
        // get user name
        const session_username = session.login
        const session_id = session.id
        const session_accessToken = session.accessToken

        SITE_USER_DATA = JSON.parse(SITE_USER_DATA)
        // define user data
        SITE_USER_DATA = SITE_USER_DATA.usersData

        // define technologies object
        let SITE_USER_TECHNOLOGIES = SITE_USER_DATA[0].technologies

        return (
            <>
            <Header />
            <Button>Hey {session_username}! You are viewing {SITE_USERNAME}'s page!</Button>
            <div>
              {SITE_USER_TECHNOLOGIES.map((technology, key) => {
                return <p key={key}>{technology}</p>;
              })}
            </div>
              <TextField id="techInput"></TextField>
              <button id="addTechnologyButton" onClick={() => console.log(document.getElementById("techInput").value)}> Add Technology</button>


            </>
        )
    }

    return (
        <Header />
    )



}

export async function getServerSideProps(context) {

    // get user name from context
    var axios = require('axios');
    let SITE_USERNAME = context.params.username
    var data = JSON.stringify({"name":SITE_USERNAME})
    var config = {
        method: 'get',
        url: 'http://localhost:3000/api/r/getUser',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      let raw_response = await axios(config)
                      .catch(function (error) {
                        console.log(error);
                      });

      let SITE_USER_DATA = JSON.stringify(raw_response.data)


    return {
      props: {SITE_USERNAME, SITE_USER_DATA}, // will be passed to the page component as props
    }
  }



export default dynamicUserHome;