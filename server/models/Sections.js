const mongoose=require('mongoose')

const SectionSchema=new mongoose.Schema({
    code:String,
    section:String,
    bureau:String

})

const SectionModel=mongoose.model("sections",SectionSchema);
module.exports=SectionModel;