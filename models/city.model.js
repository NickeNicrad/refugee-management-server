const Sequelize = require('sequelize');
const {db_connection} = require('../db/connector_db');

const City = db_connection.define('cities', {
    cityName: {
        type: Sequelize.STRING,
        default: 'Unknown',
    },
    state_id: {
        type: Sequelize.NUMBER
    },
});

module.exports = City;