let express = require('./node_modules/express')
let morgan = require('./node_modules/morgan')

let hostname = 'localhost'
let port = 4000

let app = express()

app.use(morgan('dev'))

app.use(express.static(__dirname+'/public'))

app.listen(port, hostname, function(){
    console.log('Server running at http://'+hostname+':'+port)
})