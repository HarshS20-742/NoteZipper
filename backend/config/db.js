const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://harshyadav5939:Harsh%401234@cluster0.q0xjet4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        console.log(`MongoDB connected: ${conn.connection.host}:${conn.connection.port}/${conn.connection.name}`);
    } catch (error) {
        console.error("Connection Error:", error.message);
    }
};

module.exports = connectDB;
