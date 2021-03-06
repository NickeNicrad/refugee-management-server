const Sequelize = require('sequelize');
const {db_connection} = require('../db/connector_db');

const History = db_connection.define('histories', {
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
    camp: {
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

module.exports = History;