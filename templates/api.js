// Hello.js
// This is really just a template api structure

import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({req})
  
  if(session){
    var name = session.user.name;
    res.status(200).json({ name: name })
    return;
  }
  else{
    res.status(401).json({ message: 'Not verfied'})
    return;
  }
}
