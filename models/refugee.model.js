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
    partner_id: {
        type: Sequelize.NUMBER,
    },
    dob: {
        type: Sequelize.DATE,
        default: new Date().toISOString()
    },
    married: {
        type: Sequelize.BOOLEAN,
        default: false
    },
    uid: {
        type: Sequelize.INTEGER,
        default: 0
    }
});

module.exports = Refugee;