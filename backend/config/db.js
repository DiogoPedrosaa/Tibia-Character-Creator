const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/tibia_db", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Banco conectado com sucesso");
    } catch (error){
        console.log("Erro na conexão com o banco: ", error);
        process.exit(1);
    }
}


module.exports = connectDB;