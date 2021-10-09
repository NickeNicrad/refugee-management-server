const Sequelize = require('sequelize');
const {db_connection} = require('../db/connector_db');

const Refugee = db_connection.define('refugees', {
    fname: {
        type: Sequelize.STRING,
        default: 'Unknown',
    },
    lname: {
        type: Sequelize.STRING,
        default: 'Unknown'
    },
    dest_from: {
        type: Sequelize.STRING,
        default: 'Unknown'
    },
    destination: {
        type: Sequelize.STRING,
        default: 'Unknown'
    },
    gender: {
        type: Sequelize.STRING
    },
    partner: {
        type: Sequelize.STRING,
        default: 'Unknown'
    },
    dob: {
        type: Sequelize.DATE,
        default: new Date().toISOString()
    },
    married: {
        type: Sequelize.BOOLEAN,
        default: false
    },
});

module.exports = Refugee;