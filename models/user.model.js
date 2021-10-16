const Sequelize = require('sequelize');
const {db_connection} = require('../db/connector_db');

const User = db_connection.define('users', {
    fname: {
        type: Sequelize.STRING,
        default: 'Unknown'
    },
    lname: {
        type: Sequelize.STRING,
        default: 'Unknown'
    },
    email: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.NUMBER
    },
    active: {
        type: Sequelize.BOOLEAN,
        default: false
    }
});

module.exports = User;