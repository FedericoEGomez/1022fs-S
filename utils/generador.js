const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = generadorToken = (body) =>{
    const payload = {body}
    return jwt.sign(payload,process.env.SECRET_TOKEN,{
        expiresIn: '4h'
    })
}