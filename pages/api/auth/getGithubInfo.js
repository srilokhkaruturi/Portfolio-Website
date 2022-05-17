import { getToken } from "next-auth/jwt"
import axios from 'axios'

export default async function handler(req, res) {
  // if using `NEXTAUTH_SECRET` env variable, we detect it, and you won't actually need to `secret`
  // const token = await getToken({ req })
  const token = await getToken({ req});

  if(!token){
      res.status(400).json({"success":"failure"})
      return;
  }

  const authHeader = {Authorization:'token ' + token.accessToken}
  const url = 'https://api.github.com/user'

  let response = await axios.get(url, {headers : authHeader});
  let githubInformation = response.data;
  res.status(200).json(githubInformation);
  return;
}