const express = require('express')
const app = express()
const pkg = require('../package.json')
const log = require('./log')

app.get('/', (req, res) => {
    let ua = req.get('User-Agent')
    log().info(ua, `${pkg.name} hit`)
    res.send('OK')
})


const listen = (port, done) => {
    return app.listen(port, done)
}

module.exports = {
    listen
}