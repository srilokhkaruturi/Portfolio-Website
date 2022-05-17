// post method
// user.js, will post a new user
import clientPromise from '../../../lib/mongodb'
import axios from 'axios'
import nc from "next-connect"
import cors from "cors";

const handler = nc()
  .use(cors())
  .post(async (req,res) => {

        // define the client of mongodb
        const client = await clientPromise

        // lets define the database
        const db = client.db("userData");
    
        const users = db.collections("users");
    
        // determine what to do 
        const { method } = req;
    
        if(method=="POST"){
            try{
                // get user data
                const dataUsers = await db.collection("users").insertOne(req.body);
                const users = JSON.parse(JSON.stringify(dataUsers));

                if(!dataUsers){
                    res.status(400).json({success: "false", message:"duplicate"})
                }

                res.status(200).json({success: "true", usersData:users,})
                return;
            } catch (error) {
                res.status(400).json({success: "false", message: error.message})
                return;
    
            }
            res.status(400).json({success: "failure"})
            return;
    
        }

    });

export default handler;