const bodyParser = require('body-parser')
var express=require('express')
var mongoose=require('mongoose')
var num


var app= express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.send("WELCOME")
})
app.post('/oddeven',(req,res)=>{

    var getNum=parseFloat(req.body.num)
    if(getNum%2==0)
    {
        res.json('even')

    }else{
        res.json('odd')
    }
})
app.listen(process.env.POST||3004,()=>{
    console.log("Server started at http://localhost:3004/")
})
