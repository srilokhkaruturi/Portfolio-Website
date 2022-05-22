import {useSession} from "next-auth/react";

function authenticateHome(){
  const { data: session } = useSession();
  // get user name of the session

  // once we get here /authenticate
  // 1. check if user is in database
  // 2. redirect user to their website
  if(session){
      // define username
      let userName = session.login
      let userID = session.id
      // check if user is in database
      // add user to database
      addUserToDatabase(userName, userID).then((message) => {console.log(message)}).catch((err) => {console.log(err)})
      // redirect user to their webpage
      window.location.replace("/"+session.login);
      return (<h1>Session! Logged in as {session.login}</h1>)
  }

  return (<h1>No Session! Failed login!</h1>)
  
}

const addUserToDatabase = async (userName, userID) => {
  // try to add the user to the database
  try{
    userName = String(userName).toLowerCase()
    console.log("userName: " + userName);

    console.log("userID: " + JSON.stringify(userID));

    // define the body of the response
    var axios = require('axios');
    var data = JSON.stringify({
      "name": userName,
      "_id": userID,
    });
    
    var config = {
      method: 'post',
      url: '/api/c/createUser',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    let res = await axios(config)
    .catch(function (error) {
      console.log(error);
    });
    // add 
    if(!res){
      return Promise.reject("ERROR: COUlD NOT ADD USER")
    }
    
    return Promise.resolve("SUCCESS: Added new user")
  }catch(error){
    return Promise.reject("ERROR: COULD NOT ADD USER")
  }
  return
}

export default authenticateHome