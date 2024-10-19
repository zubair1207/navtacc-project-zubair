const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`Connected to ${mongoose.connection.host}`);
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDB