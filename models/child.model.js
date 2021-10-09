const Sequelize = require('sequelize');
const {db_connection} = require('../db/connector_db');

const Child = db_connection.define('children', {
    fname: {
        type: Sequelize.STRING,
        default: 'Unknown',
    },
    lname: {
        type: Sequelize.STRING,
        default: 'Unknown'
    },
    dob: {
        type: Sequelize.DATE,
        default: new Date().toISOString()
    },
    gender: {
        type: Sequelize.STRING,
    },
    parents: {
        type: Sequelize.STRING
    }
});

module.exports = Child;