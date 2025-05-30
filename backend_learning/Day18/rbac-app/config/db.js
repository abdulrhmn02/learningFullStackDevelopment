const mongoose = require('mongoose');

const connectDb =  async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database Connected Successfully');

    } catch (error) {
        console.log('database connection error ')
        process.exit(1);
    }
}



module.exports =  connectDb;