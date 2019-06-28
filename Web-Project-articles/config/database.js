const mongoose = require("mongoose");

function database (config) {
    mongoose.connect(config.dbRoute, {
        useNewUrlParser: true
    });
    
 const db = mongoose.connection;
db.on('error', () => console.log("connection error:"));
db.once('open', () => console.log("Db connect"));
}

module.exports = database;