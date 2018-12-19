const server = require('./lib/server')
const PORT = process.env.PORT || 8001
const pkg = require('./package.json')
const log = require('./lib/log')

server.listen(PORT, () => {
    log().info(`${pkg.name} is running on ${PORT}`)
})