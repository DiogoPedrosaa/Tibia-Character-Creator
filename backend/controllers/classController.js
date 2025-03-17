const classes = require('../models/classModel');

const getClasses = async (req, res) => {
    try {
        const classesList = await classes.find();
        res.json(classesList);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

const createClass = async (req, res) => {
    try {
        const newClass = new classes(req.body);
        await newClass.save();
        res.status(201).json(newClass);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const deleteClass = async (req, res) => {
    try {
        await classes.findByIdAndDelete(req.params.id);
        res.json({message: "Classe deletada com sucesso!"});
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

const updateClass = async (req, res) => {
    try {
        const updateClass = await classes.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updateClass);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}


module.exports = {getClasses, createClass, updateClass, deleteClass};