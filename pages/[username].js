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

        // define technologies
        let SITE_USER_TECHNOLOGIES

        try{
            SITE_USER_TECHNOLOGIES = SITE_USER_DATA[0].technologies
        }
        catch{
            SITE_USER_TECHNOLOGIES = ["No technologies. Try adding one."]
        }

        // define technologies object


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
              <button id="addTechnologyButton" onClick={() => addTechnology(document.getElementById("techInput").value, session_username)}> Add Technology</button>


            </>
        )
    }

    return (
        <Header />
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
      let SITE_USER_DATA
      if(raw_response){
         SITE_USER_DATA = JSON.stringify(raw_response.data)
      }
      else{
        SITE_USER_DATA = ""
      }


    return {
      props: {SITE_USERNAME, SITE_USER_DATA}, // will be passed to the page component as props
    }
  }



export default dynamicUserHome;