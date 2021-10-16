const Sequelize = require('sequelize');
const {db_connection} = require('../db/connector_db');

const State = db_connection.define('states', {
    stateName: {
        type: Sequelize.STRING,
        default: 'Unknown',
    },
    country_id: {
        type: Sequelize.NUMBER
    },
});

module.exports = State;