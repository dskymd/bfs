const http = require('http')
const server = http.createServer();
const fs = require('fs')


server.on('request', function (req, res) {

  fs.readFile('source/index.html', 'utf8', function (err, data) {

    if (err) {
      res.writeHead(404, {
        'Content-Type': 'text/html'
      })
      res.write('<h3>404</h3>')
      res.end()
    }

    res.writeHead(200, {
      'Conten-Type': 'text/html'
    })
    res.write(data)
    res.end()

  })

})

server.listen(3000)