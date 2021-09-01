//const express = require("express"); // require is an old syntax
import express, { request, response } from "express"; // default export
import { MongoClient } from "mongodb";// named export
const app = express();

const users = [
    {
     "createdAt": "2021-07-19T23:28:37.919Z",
     "name": "Emmett Hauck",
     "avatar": "https://cdn.fakercloud.com/avatars/beweinreich_128.jpg",
     "id": "1"
    },
    {
     "createdAt": "2021-07-19T18:22:15.504Z",
     "name": "Jonathan Dicki",
     "avatar": "https://cdn.fakercloud.com/avatars/dhooyenga_128.jpg",
     "id": "2"
    },
    {
     "createdAt": "2021-07-20T06:39:14.968Z",
     "name": "Mercedes Wintheiser",
     "avatar": "https://cdn.fakercloud.com/avatars/bergmartin_128.jpg",
     "id": "3"
    },
    {
     "createdAt": "2021-07-20T03:26:22.334Z",
     "name": "Jean Schneider",
     "avatar": "https://cdn.fakercloud.com/avatars/nickfratter_128.jpg",
     "id": "4"
    },
    {
     "createdAt": "2021-07-19T23:34:00.537Z",
     "name": "Lynn Daniel DDS",
     "avatar": "https://cdn.fakercloud.com/avatars/betraydan_128.jpg",
     "id": "5"
    },
    {
     "createdAt": "2021-07-19T15:21:50.959Z",
     "name": "Jessie Murphy",
     "avatar": "https://cdn.fakercloud.com/avatars/mr_subtle_128.jpg",
     "id": "6"
    },
    {
     "createdAt": "2021-07-19T19:38:20.897Z",
     "name": "Stanley Schultz",
     "avatar": "https://cdn.fakercloud.com/avatars/muringa_128.jpg",
     "id": "7"
    },
    {
     "createdAt": "2021-07-19T21:47:38.975Z",
     "name": "Justin Legros",
     "avatar": "https://cdn.fakercloud.com/avatars/tobysaxon_128.jpg",
     "id": "8"
    },
    {
     "createdAt": "2021-07-20T06:43:56.256Z",
     "name": "Marcia Yost",
     "avatar": "https://cdn.fakercloud.com/avatars/cyril_gaillard_128.jpg",
     "id": "9"
    },
    {
     "createdAt": "2021-07-19T14:38:57.288Z",
     "name": "Howard Skiles I",
     "avatar": "https://cdn.fakercloud.com/avatars/VinThomas_128.jpg",
     "id": "10"
    }
   ];

            //CONNECTION TO DB is here
//const MONGO_URL = "mongodb://localhost";
const MONGO_URL = "mongodb+srv://KANNIGA:@cluster0.agz5n.mongodb.net"
async function createConnection (){
const client = new MongoClient(MONGO_URL);
await client.connect();

// const result = await client (this coding is for displaying brands in console log not in localhost)
// .db("flipkart")
// .collection("brands")
// .find({})
// .toArray();
// console.log(result);
// }
//createConnection();
return client;
}


            //CRUD
app.use(express.json()); // middleware - all the body ill be parsed as json
app.get("/" , (request , response) => {
    response.send("Hello from the server you created , and nodemon helps to restart the server by saving");
});
            //post method to post a user and just for console log
app.post("/user" , (request , response) => {
    console.log(request.body);
    response.send({message : "created a user"});
});
            //posting user details from api that will reflect in database a ne collection is added as "users"
app.post("/users" , async (request , response) => {
    const usersdata = request.body;
    const client = await createConnection();
    const posting_users = 
    await client.db("flipkart").collection("users").insertMany(usersdata);
    response.send(posting_users);
});
            //here you are getting this brands directly from db i.e, connecting node to db
app.get("/brands" , async (request , response) => {
    const client = await createConnection();
    const display_brands = 
    await client.db("flipkart").collection("brands").find({}).toArray();
    response.send(display_brands);
});
            //here you are getting user list from db 
app.get("/users" , async (request , response) => {
    const client = await createConnection();
    const display_users = 
    await client.db("flipkart").collection("users").find({}).toArray();
    response.send(display_users);
});

            //here we got user list from const users = [] which is given manually upper part of program
// app.get("/users" , (request , response) => {
//     response.send(users);
// });

            //for displaying that particular userid if we give id number done manually
// app.get("/users/:id" , (request , response) => {
//     const { id } = request.params;
//     console.log("Requesting for the userid: ", id);

//     const ifnotfound = { message : "user not found" };
//     const searchedUser = users.filter((data) => data.id == id)
//     if(searchedUser.length > 0){
//         response.send(searchedUser);
//     } else {
//         response.send(ifnotfound);
//     }    
// });

            //making user id display from database
app.get("/users/:userid", async (request , response) =>{
    const {userid} = request.params;
    const client = await createConnection();
    const display_users_id = await client.db("flipkart").collection("users").find({id : userid}).toArray();
    response.send(display_users_id);
})


app.listen(4001 , () => console.log("The Server is created"));
