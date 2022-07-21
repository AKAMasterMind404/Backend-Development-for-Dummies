const express = require('express');
var bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let userMap = {};

function getUsers(req,res){
    
    return res.json({
        "users":userMap        
    })
}

function getUserById(req,res){
    return res.json({
        "message": "User with ID!"
    })
}

function updateUser(req,res){
    return res.json({
        "message": "Updated User!"
    })
}

function deleteUser(req,res){
    return res.json({
        "message": "Deleted User!"
    })
}

function addUser(req,res){
    console.log(req.body.name);
    return res.json({
        "message": "Added User!"
    })
}

app.listen(3000, (req,res)=>{
    console.log("Started on port 3000!");
})

const userRouter = express.Router();
app.use('/user', userRouter);

userRouter
    .route('/')
    .get(getUsers)
    .post(addUser)
    .delete(deleteUser)
    .patch(updateUser)

userRouter
    .route('/:id').get(getUserById)

app.use((req,res)=>{
    res.status(404).sendFile('./error.html', {root: __dirname});
})