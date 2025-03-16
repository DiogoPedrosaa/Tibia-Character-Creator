const characters = require("../models/characterModel");

const getCharacters = async (req, res) => {
    try {
        const charactersList = await Character.find().populate("server").populate("class");
        res.json(charactersList);
    } catch (error){
        res.status(500).json({message: error.message});
    }
};


const createCharacter = async (req, res) => {
    try {
        const newCharacter = new Character(req.body);
        await newCharacter.save();
        res.status(201).json(newCharacter);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}


const deleteCharacter = async (req, res) => {
    try {
        await Character.findByIdAndDelete(req.params.id)
        res.json({message: "Personagem deletado com sucesso"});
    } catch (error){
        res.status(500).json({message: error.message});
    }
}


const updateCharacter = async (req, res) => {
    try {
        const updateCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updateCharacter);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}


module.exports = {getCharacters, createCharacter, deleteCharacter, updateCharacter};