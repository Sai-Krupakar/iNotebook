const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://sai:sai@cluster0.fzluavq.mongodb.net/test";
// const mongoURI = "mongodb://localhost:27017";
// mongoose.set("strictQuery", true);
const ConnectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("Connected to Mongo successfully");
    });
}

module.exports = ConnectToMongo;