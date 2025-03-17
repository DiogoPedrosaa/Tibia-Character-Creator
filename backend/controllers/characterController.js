const Character = require("../models/characterModel");

const getCharacters = async (req, res) => {
    try {
        const characters = await Character.find().populate('server class');
        res.status(200).json(characters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar personagens' });
    }
};


const createCharacter = async (req, res) => {
    try {
        const { name, level, magic, distance, axe, sword, club, shielding, server, class: characterClass } = req.body;

        if (!name || !level || !server || !characterClass) {
            return res.status(400).json({ message: 'Dados insuficientes para criar o personagem' });
        }

        const newCharacter = new Character({
            name,
            level,
            magic,
            distance,
            axe,
            sword,
            club,
            shielding,
            server,
            class: characterClass
        });

        await newCharacter.save();
        res.status(201).json(newCharacter);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Erro ao criar personagem' });
    }
};


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