/*
File: addTechnology.js
Description:

req = POST METHOD where we define a user or userid and a certain technology


*/
import clientPromise from '../../../lib/mondodb'


export default async (req, res) => {
    // define the client of mongodb
    const client = await clientPromise

    if(client.isConnected == false){
        throw new error("Could not connect to mongodb databse")
    }

    // lets define the database
    const db = client.db("userData");

    const users = db.collections("users");

    // determine what to do 
    const { method } = req;

    // JSON
    const reqBody = req.body;

    // define name
    const name = reqBody["name"];

    // const add technology
    const technology = reqBody["technology"]

    if(method=="PUT"){
        try{
            // get ready to update
            const query = {name: name}
            const update = { $push: {technologies:technology}};
            const options = {}

            const dataUsers = await db.collection("users").updateOne(query, update, options);
            //const users = JSON.parse(JSON.stringify(dataUsers));
            res.status(200).json({success: "true"})
            return;
        } catch (error) {
            res.status(400).json({success: "false", message: [error.message, error.name, name], requestbody: req.body})
            return;
        }

    }

}