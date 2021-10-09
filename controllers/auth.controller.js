const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config('../.env');
const User = require('../models/user.model');
exports.login = async (req, res) =>
{
    const {email, password} = req.body;
    try {
        if (!email || !password) throw res.status(400).json({message: 'veillez completez tous les champs avant de continuer!'});
        const user = await User.findOne({where: {email}});
        if (!user || user === null || user === undefined || user === "") throw res.status(401).json({message: 'addresse email incorrect!'});
        if (await bcrypt.compare(password, user.password))
        {
            const token = await jwt.sign({id: user.id, role: user.role}, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN
            });
            res.status(200).json({role: user.role, token, message: `Bienvenu ${user.fname} ${user.lname}`});
        } else
        {
            throw res.status(401).json({message: 'mot de passe incorrect!'});
        }
    } catch (error) {
        res.status(520).json('erreur serveur: ' + error);
    }
}

exports.signup = async (req, res) =>
{
    const {fname, lname, email, role, password} = req.body;
    try {
        if (!fname || !lname || !email || !role || !password) throw res.status(400).json('veillez completez tous les champs avant de continuer!');
        const user = await User.findOne({where: {email}});
        if (user) throw res.status(400).json(`l'address mail: ${email} existe déjà dans le système`);
        const hashpass = await bcrypt.hash(password, 12);
        await User.create({
            fname,
            lname,
            email,
            role,
            password: hashpass
        });
        res.status(200).json('utilisateur créé avec succès');
    } catch (error) {
        res.status(500).json('erreur serveur: ' + error);
    }
}