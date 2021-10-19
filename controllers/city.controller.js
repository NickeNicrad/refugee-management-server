const City = require('../models/city.model');

exports.createCity = async (req, res) => {
    const {cityName, state_id} = req.body;
    try {
        if (!cityName || !state_id) throw res.status(400).json('veillez completez tous les champs avant de continuer!');
        const city = await City.findOne({where: {cityName, state_id}});

        if (city) throw res.status(400).json(`${city.cityName}, cette ville existe déjà dans la base de données`);
        await City.create({
            cityName,
            state_id
        });
        res.status(200).json('créer avec succes');
    } catch (error) {
        res.status(500).json('something went wrong ' + error);
    }
}

exports.getAllCities = async (req, res) => {
    try {
        const cities = await City.findAll();
        res.status(200).json(cities);
    } catch (error) {
        res.status(500).json('something went wrong ', error);
    }
}

exports.deleteCity = async (req, res) => {
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