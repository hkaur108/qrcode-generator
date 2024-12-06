const mongoose= require('mongoose');

const urlSchema= new mongoose.Schema({
    url:{
        type:String,
        required:True,
    }
})

const URL=mongoose.model('url',urlSchema);
module.exports={
    URL,
}