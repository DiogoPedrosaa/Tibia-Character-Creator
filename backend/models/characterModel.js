const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    server: {
        type: mongoose.Schema.Types.ObjectId, ref: "Server",
        required: true
    },
    class: {
        type: mongoose.Schema.Types.ObjectId, ref: "Class",
        required: true
    },
    magic: {
        type: Number
    },
    distance: {
        type: Number
    },
    axe: {
        type: Number
    },
    sword: {
        type: Number
    },
    club: {
        type: Number
    },
    shielding: {
        type: Number
    },

});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;