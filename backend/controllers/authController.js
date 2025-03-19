const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();


exports.register = async (req, res) =>{
    const {username, email, password} = req.body;

    try{
        const user = new User({username, email, password});
        await user.save();
        res.status(201).json({message: "Usuario cadastrado com sucesso"});
    } catch (error){
        res.status(400).json({message: error.message});
    }
};



exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Senha incorreta' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao fazer login', error: err.message });
    }
};