const servers = require('../models/serverModel');

const getServers = async (req, res) => {
    try {
        const allServers = await servers.find();
        res.status(200).json(allServers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createServer = async (req, res) => {
    const newServer = new servers(req.body);
    try {
        const savedServer = await newServer.save();
        res.status(201).json(savedServer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateServer = async (req, res) => {
    try {
        const updatedServer = await servers.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedServer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteServer = async (req, res) => {
    try {
        await servers.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Servidor deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {getServers,createServer,updateServer,deleteServer};