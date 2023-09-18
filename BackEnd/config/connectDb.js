const mangoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = async()=>{
    try {
        const connect = await mangoose.connect(process.env.CONNECTION_STRING)
        console.log('Database Connected Successfully', connect.connection.host)
        
    } catch (error) {
        console.log('Database not Connected')
        // throw new error
        
    }
}

module.exports = connectDB