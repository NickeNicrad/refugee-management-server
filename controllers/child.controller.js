const Child = require("../models/child.model");

exports.createChild = async (req, res) =>
{
    const {fname, lname, dob, gender, parents, uid} = req.body;
    try {
        if (!fname || !lname) throw res.status(400).json('veillez completez tous les champs avant de continuer!');
        const user = await Child.findOne({where: {fname, lname}});
        if (user) throw res.status(400).json(`${fname} ${lname} existe déjà dans le système`);
        await Child.create({
            fname,
            lname,
            dob,
            gender,
            parents,
            uid
        });
        res.status(200).json('créé avec succès');
    } catch (error) {
        res.status(500).json('erreur serveur: ' + error);
    }
}
exports.getAllChildren = async (req, res) =>
{
    try {
        const children = await Child.findAll();
        res.status(200).json(children);
    } catch (error) {
        res.status(500).json('something went wrong');
    }
}
exports.updateChild = async (req, res) =>
{
    const {id} = req.params;
    const {fname, lname, dob, gender, parents, uid} = req.body;
    try {
        if (!fname || !lname) throw res.status(400).json('veillez completez tous les champs avant de continuer!');
        const user = await Child.findOne({where: {fname, lname}});
        if (user) throw res.status(400).json(`${fname} ${lname} existe déjà dans le système`);
        await Child.update({
            fname,
            lname,
            dob,
            gender,
            parents,
            uid
        }, {where: {id}});
        res.status(200).json('mise à jour avec succès!');
    } catch (error) {
        res.status(500).json('something went wrong ' + error);
    }
}
exports.deleteChild = async (req, res) => {
    const {id} = req.params;
    try {
        await Child.destroy({
            where: {id}
        })
        res.status(200).json('suppression avec succès!');
    } catch (error) {
        res.status(404).json('something went wrong: ' + error);
    }
}