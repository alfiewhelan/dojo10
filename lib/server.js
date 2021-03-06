const express = require('express')
const app = express()
const pkg = require('../package.json')
const log = require('./log')
const request = require('request-promise-native')

app.get('/', async (req, res) => {
    log().info(`${pkg.name} hit`)
    let data = await request({
        uri: 'http://51.141.24.91/',
        method: 'GET'
    })
    res.send(`Microservice02 response : ${data}`)
})


const listen = (port, done) => {
    return app.listen(port, done)
}

module.exports = {
    listen
}