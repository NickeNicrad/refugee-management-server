const express = require('express');
const cors = require('cors');
const {json, urlencoded} = require('express');
const dotenv = require('dotenv');

const {db_connection} = require('./db/connector_db');

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const refugeeRoutes = require('./routes/refugee.routes');
const childRoutes = require('./routes/child.routes');

const app = express();
dotenv.config({path: './.env'});

// static middleware
app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));

// static routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/refugee', refugeeRoutes);
app.use('/api/child', childRoutes);

const PORT = process.env.PORT || 8081;

db_connection.authenticate()
    .then(() => console.log("database successfully connected!"))
    .catch(error => console.error("something went wrong: ", error));

app.listen(PORT, console.log('server running on port: ', PORT));