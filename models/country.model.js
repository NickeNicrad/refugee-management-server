const Sequelize = require('sequelize');
const {db_connection} = require('../db/connector_db');

const Country = db_connection.define('countries', {
    countryName: {
        type: Sequelize.STRING,
        default: 'Unknown',
    }
});

module.exports = Country;