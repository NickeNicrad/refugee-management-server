const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path: '../.env'});

exports.authenticated = async (req, res, next) =>
{
    if(!req.headers.authorization) throw res.status(401).json("access denied! you've no valid token\nplease login and try again");
    const token = await req.headers.authorization.split(' ')[1];
    if (!token) throw res.status(401).json('access denied! you are not allowed to perform this action\nplease login and try again');
    try {
        const user = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json('access denied! invalid token\nplease login and try again');
    }
}