/*
File: crud/addTechnology.js
*/


import { getToken } from "next-auth/jwt"

export default async function handler(req, res) {
  // if using `NEXTAUTH_SECRET` env variable, we detect it, and you won't actually need to `secret`
  // const token = await getToken({ req })



  const token = await getToken({ req});


  if(!token){
    res.status(400).json({"JSON Web Token": "null"})
    return;
  }
  res.status(200).json({"JSON Web Token":token});      
  return;

}