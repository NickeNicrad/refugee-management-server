const State = require('../models/state.model');

exports.createState = async (req, res) => {
    const {stateName, country_id} = req.body;
    console.log()
    try {
        if (!stateName || !country_id) throw res.status(400).json('veillez completez tous les champs avant de continuer!');
        const state = await State.findOne({where: {stateName, country_id}});

        if (state) throw res.status(400).json(`${state.stateName} cette province existe déjà dans la base de données`);
        await State.create({
            stateName,
            country_id
        });
        res.status(200).json('créer avec succes');
    } catch (error) {
        res.status(500).json('something went wrong ' + error);
    }
}

exports.getAllStates = async (req, res) => {
    try {
        const states = await State.findAll();
        res.status(200).json(states);
    } catch (error) {
        res.status(500).json('something went wrong');
    }
}

exports.deleteState = async (req, res) => {
    const {id} = req.params;
    try {
        await City.destroy({
            where: {where: id}
        });
        res.status(200).json('supprimer avec succes');
    } catch (error) {
        res.status(500).json('something went wrong: ', error);
    }
}