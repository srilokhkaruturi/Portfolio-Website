import {useSession} from "next-auth/react";
import Header from '../header';
import Button from '@mui/material/Button'
import React from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { useFormControl } from '@mui/material/FormControl';
import { useRouter } from 'next/router'
// if there is a session let's print the user name
// if there is not a sessions let's print the public version of this username

// define page user name 

// define user data of the page 
function dynamicUserHome({SITE_USER_DATA, SITE_USERNAME}){
    // DEFINE SESSION 
    const { data: session } = useSession();
    console.log(SITE_USER_DATA)
    let SITE_USER_TECHNOLOGIES = []
    let SESSION_USERNAME
    let SESSION_ID
    let SESSION_ACCESSTOKEN
    if(session) {
        // DEFINE USERNAME
        SESSION_USERNAME = session.login

        // DEFINE SESSION ID
        SESSION_ID = session.id

        // DEFINE SESSION ACCESSTOKEN
        SESSION_ACCESSTOKEN = session.accessToken
    }


    try{
        // DEFINE USER DATA
        SITE_USER_DATA = SITE_USER_DATA.usersData

        // DEFINE TECHNOLOGIES
        SITE_USER_TECHNOLOGIES = SITE_USER_DATA[0].technologies
    }
    catch(err) {
        // DEFINE USER TECHNOLOGIES
        console.log(err.message);
        SITE_USER_TECHNOLOGIES = ["User does not exist or data of user could not be loading properly.", String(err.message)]
    }

    return (
        <>
            <Header />
            <Button>Hey {SESSION_USERNAME}! You are viewing {SITE_USERNAME}'s page!</Button>

            {SITE_USER_TECHNOLOGIES &&
            <div>
              {SITE_USER_TECHNOLOGIES.map((technology, key) => {
                return <p key={key}>{technology}</p>;
              })}
            </div> }

            {!SITE_USER_TECHNOLOGIES && <h1>User does not have any technologies added!</h1>}


        </>
    )
}

async function addTechnology(technology, session_username){
  console.log("Adding " + technology + " to "  + session_username)
  var axios = require('axios');
  var data = JSON.stringify({
    "name": session_username,
    "technology": technology
  });

  var config = {
    method: 'put',
    url: '/api/c/addTechnology',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  let res = await axios(config)
  .catch(function (error) {
    console.log(error);
  });

  window.location.reload();
}

export async function getServerSideProps(context) {

    // domain
    const domain = context.req.headers.host
    // get user name from context
    var axios = require('axios');
    let SITE_USERNAME = context.params.username
    var data = JSON.stringify({"name":SITE_USERNAME})
    var config = {
        method: 'get',
        url: "http://"+domain+'/api/r/getUser',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      let raw_response = await axios(config)
                      .catch(function (error) {
                        console.log(error);
                      });
      let SITE_USER_DATA
      if(raw_response){

         SITE_USER_DATA = raw_response.data
      }
      else{
        SITE_USER_DATA = ["Could not load technologies."]
      }

      // output to console the things that we have loaded
    return {
      props: {SITE_USERNAME, SITE_USER_DATA}, // will be passed to the page component as props
    }
  }

export default dynamicUserHome;