const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Server", serverSchema);