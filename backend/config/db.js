const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
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