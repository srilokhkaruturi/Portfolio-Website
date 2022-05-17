// post method
// user.js, will post a new user
import clientPromise from '../../../lib/mongodb'


export default async (req, res) => {
    // define the client of mongodb
    const client = await clientPromise

    // lets define the database
    const db = client.db("userData");

    const users = db.collections("users");

    // determine what to do 
    const { method } = req;

    if(method == "POST"){
        try{
            const dataUsers = await db.collection("users").deleteMany({});
            const users = JSON.parse(JSON.stringify(dataUsers));
            res.status(200).json({success: "true", message:"deleted all users",})
            return;
        } catch (error) {
            res.status(400).json({success: "false", message: error.message})
            return;
        }


    }

    res.status(400).json({success: "failure"})
    return;

}