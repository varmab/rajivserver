var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/conferences")

var conferenceSchema=mongoose.Schema({
    title:String
})

exports.Conference=mongoose.model('Conferenence',conferenceSchema,'conferences');
