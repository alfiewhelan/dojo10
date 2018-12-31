const express = require('express')
const app = express()
const pkg = require('../package.json')
const log = require('./log')
const request = require('request-promise-native')

app.get('/', async (req, res) => {
    //console.log('service hit')
    //let ua = req.get('User-Agent')
    log().info(`${pkg.name} hit`)
    let data = await request({
        uri: 'http://51.141.24.91/',
        method: 'GET'
    })
    res.send(`Microservice01 : ${data}`)
})


const listen = (port, done) => {
    return app.listen(port, done)
}

module.exports = {
    listen
}