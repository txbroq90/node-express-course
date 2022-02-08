const { application } = require('express');
const express = require('express');
const app = express();

const mockUserData=[
        {name:'Mark'},
        {name:'Jill'}   
]

app.get('/users',function(req,res){
    res.json({
            success: true,
            message: 'successfully got users. Nice!',
            users: mockUserData
            })
    })

    app.get('/users/:id',function(req,res){
        console.log(req,params.id)
        res.json({
            success: true,
            message: 'got one user',
            users: req.params.id
        })
    })

    application.post('/login',function(req,res){
        //tcypically passwords are encrypted using somehting like bcrypyt before sending to datbase
        const username=req.body.username;
        const password=req.body.password;

        //this shoule come from database
        const mockUsername="billyTheKid";
        const mockPassword="superSecret";

        if (username===mockUsername && password===mockPassword){
            //in practice, use json web token sign method to make an encrypted token
            res.json({
                success: true,
                message: 'password and username match!',
                token: 'encrypted tokwn goes here'
            })
        } else {
            res.json({
                success: false,
                message: 'password and username dont match'
            })
        }
    })

app.listen(8000,function(){console.log('server is listening')})
