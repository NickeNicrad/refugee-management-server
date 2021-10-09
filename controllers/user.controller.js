const bcrypt = require('bcryptjs');
const User = require("../models/user.model");

exports.getProfile = async (req, res) =>
{
    try {
        const user = await User.findOne({where: {id: req.user.id, role: req.user.role}});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json('something went wrong');
    }
}
exports.getAllUsers = async (req, res) =>
{
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json('something went wrong');
    }
}
exports.updateUser = async (req, res) =>
{
    const {id} = req.params;
    const {fname, lname, email, password} = req.body;
    try {
        if (!fname || !lname || !email || !password) throw res.status(400).json('veillez completez tous les champs avant de continuer!');
        const user = await User.findOne({where: {email}});
        if (user) throw res.status(400).json(`l'address mail: ${email} existe déjà dans le système`);
        const hashpass = await bcrypt.hash(password, 12);
        await User.update({
            fname,
            lname,
            email,
            password: hashpass
        }, {where: {id, email}});
        res.status(200).json('mise à jour avec succès!');
    } catch (error) {
        res.status(500).json('something went wrong ' + error);
    }
}
exports.deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        await User.destroy({
            where: {id}
        })
        res.status(200).json('supprimer avec succès!');
    } catch (error) {
        res.status(404).json('something went wrong: ' + error);
    }
}