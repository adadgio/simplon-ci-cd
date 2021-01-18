const restify = require('restify')

/**
 * First automated github actions app.
 */
const server = restify.createServer()
server.get("/", (req, res, next) => {
    res.send(200, { result: "Ok, cool, now this works !" })
    return next()
})

server.listen(8989, function () {
    console.log('%s listening at %s', server.name, server.url);
})