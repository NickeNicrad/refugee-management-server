const Refugee = require("../models/refugee.model");

exports.createRefugee = async (req, res) =>
{
    const {fname, lname, dest_from, destination, gender, dob, married, uid, partner} = req.body;
    try {
        if (!fname || !lname || !dest_from || !destination || !gender || !dob || !uid) throw res.status(400).json('veillez completez tous les champs avant de continuer!');
        const user = await Refugee.findOne({where: {fname, lname}});
        if (user) throw res.status(400).json(`${fname} ${lname} existe déjà dans le système`);
        await Refugee.create({
            fname,
            lname,
            dest_from,
            destination,
            gender,
            dob,
            married,
            uid
        });
        res.status(200).json('créé avec succès');
    } catch (error) {
        res.status(500).json('erreur serveur: ' + error);
    }
}
exports.getAllRefugees = async (req, res) =>
{
    try {
        const refugees = await Refugee.findAll();
        res.status(200).json(refugees);
    } catch (error) {
        res.status(500).json('something went wrong');
    }
}
exports.updateRefugee = async (req, res) =>
{
    const {id} = req.params;
    const {fname, lname, dest_from, destination, gender, dob, married} = req.body;
    try {
        if (!fname || !lname || !dest_from || !destination || !gender || !dob || !married) throw res.status(400).json('veillez completez tous les champs avant de continuer!');
        const user = await Refugee.findOne({where: {fname, lname}});
        if (user) throw res.status(400).json(`${fname} ${lname} existe déjà dans le système`);
        await Refugee.update({
            fname,
            lname,
            dest_from,
            destination,
            gender,
            dob,
            married
        }, {where: {id}});
        res.status(200).json('mise à jour avec succès!');
    } catch (error) {
        res.status(500).json('something went wrong ' + error);
    }
}
exports.deleteRefugee = async (req, res) => {
    const {id} = req.params;
    try {
        await Refugee.destroy({
            where: {id}
        })
        res.status(200).json('supprimer avec succès!');
    } catch (error) {
        res.status(404).json('something went wrong: ' + error);
    }
}