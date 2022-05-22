import {useSession} from "next-auth/react";

function authenticateHome(){
  const { data: session } = useSession();
  // get user name of the session

  // once we get here /authenticate
  // 1. check if user is in database
  // 2. redirect user to their website
  if(session){
      // check if user is in database
      // add user to database
      addUserToDatabase().then((message) => {console.log(message)}).catch((err) => {console.log(err)})
      // redirect user to their webpage
      window.location.replace("/"+session.login);
      return (<h1>Session! Logged in as {session.login}</h1>)
  }

  return (<h1>No Session! Failed login!</h1>)
  
}

const addUserToDatabase = async () => {
  // try to add the user to the database
  try{
    // get user information from github
    let githubInformation = await axios.get("/api/auth/getGithubInfo", {timeout: 10000}).catch(err => {throw new error(err.name)});

    if(!githubInformation){
      throw new error("Could not get github infromation [index.js][addUserToDatabase]")
    }

    githubInformation = githubInformation.data
    // define user name
    const userName = String(githubInformation.login).toLowerCase()

    // defining id
    const userID = githubInformation.id

    console.log("userName: " + JSON.stringify(userName.toLowerCase()));

    console.log("userID: " + JSON.stringify(userID));


    // create user from using own api
    const CREATE_USER_URL = "/api/c/createUser"

    // define the body of the response
    var body = {name:userName.toLowerCase(), _id:userID}
    // add 
    response = await axios.post(CREATE_USER_URL, body, {timeout: 5000}).catch(err=>{throw new error(err)})
    console.log(response)
    if(response.status == "400"){
      return Promise.reject("ERROR: Could not add user. Likely user exists")
    }
    return Promise.resolve("SUCCESS: Added new user")
  }catch(error){
    return Promise.reject("ERROR: COULD NOT ADD USER")
  }
  return
}

export default authenticateHome