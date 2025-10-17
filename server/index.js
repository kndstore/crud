const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel=require('./models/Users')
const SectionModel=require('./models/Sections')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://iskaryoucha:UHsOMYuZrejeHXYC@cluster0.n3rggqi.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0")

app.get('/',(req,res)=>{
    UserModel.find({}).then(users=>res.json(users)).catch(err=>res.json(err))
   
})
app.get('/sections',(req,res)=>{
    SectionModel.find({}).then(sections=>res.json(sections)).catch(err=>res.json(err))
   
})

app.get('/getUser/:id',(req,res)=>{
   const id=req.params.id;
   UserModel.findById({_id:id})
   .then(users=>res.json(users))
   .catch(err=>res.json(err))
})
app.get('/getSection/:id',(req,res)=>{
   const id=req.params.id;
   SectionModel.findById({_id:id})
   .then(sections=>res.json(sections))
   .catch(err=>res.json(err))
})


app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age})

    .then(users =>res.json(users))
    .catch(err=>res.json(err))

})
app.put('/updateSection/:id',(req,res)=>{
    const id=req.params.id;
    SectionModel.findByIdAndUpdate({_id:id},{
        code:req.body.code,
        section:req.body.section,
        bureau:req.body.bureau})

    .then(sections =>res.json(sections))
    .catch(err=>res.json(err))

})


app.delete('/deleteUser/:id',(req,res)=>{
const id=req.params.id;
UserModel.findByIdAndDelete({_id:id})
    .then(res =>res.json(res))
    .catch(err=>res.json(err))
})
app.delete('/deleteSection/:id',(req,res)=>{
const id=req.params.id;
SectionModel.findByIdAndDelete({_id:id})
    .then(res =>res.json(res))
    .catch(err=>res.json(err))
})

app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users =>res.json(users))
    .catch(err=>res.json(err))

})
app.post("/createSection",(req,res)=>{
    SectionModel.create(req.body)
    .then(sections =>res.json(sections))
    .catch(err=>res.json(err))

})


app.listen(3001, () => {
  console.log("Server is Running");
});