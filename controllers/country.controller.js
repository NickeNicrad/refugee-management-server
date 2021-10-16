const Country = require('../models/country.model');

exports.createCountry = async (req, res) => {
    const {countryName} = req.body;
    try {
        if (!countryName) throw res.status(400).json('veillez completez tous les champs avant de continuer!');
        const country = await Country.findOne({where: {countryName}});

        if (country) throw res.status(400).json(`${country.countryName} cette ville existe deja dans la base`);
        await Country.create({
            countryName
        });
        res.status(200).json('créer avec succes');
    } catch (error) {
        res.status(500).json('something went wrong ' + error);
    }
}

exports.getAllCountries = async (req, res) => {
    try {
        const countries = await Country.findAll();
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json('something went wrong ' + error);
    }
}