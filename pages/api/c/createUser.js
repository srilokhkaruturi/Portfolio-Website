// post method
// createUser.js, will post a new user
import clientPromise from '../../../lib/mongodb'


export default async (req, res) => {
  
        // define the client of mongodb
        const client = await clientPromise

        // lets define the database
        const db = client.db("userData");
    
        const users = db.collections("users");


    
        try{
            // get user data
            const dataUsers = await db.collection("users").insertOne(req.body);
            const users = JSON.parse(JSON.stringify(dataUsers));
            if(dataUsers){
                console.log("Added new user to database!")
            }

            if(!dataUsers){
                res.status(400).json({success: "false", message:"duplicate"})
                console.log("Could not add user to database")
                return;
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