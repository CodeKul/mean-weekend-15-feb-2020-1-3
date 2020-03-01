const port = 3000

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', (request, response) => response.send('Hello World!'))
app.get('/dtm', (request, response) => {
    console.log(request)

    response.send({ date: new Date() })
})
app.post('/obj', (request, response) => {
    console.log(request.body)
    response.send({ obj : request.body, date : new Date() })
})
app.post('/calc', (req, res) => {
    console.log(`Calculator`)
    res.send({ result : eval(`${req.body['num1']}${req.body['op']}${req.body['num2']}`) })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

/**
 *  - what is request ?
 *  - what is response ?
 *  - what are headers ?
 *  - what are response status codes ? 2xx, 3xx, 4xx, 5xx
 *  -
 *
 */

//curl -X POST -d "hi" http://localhost:3000/obj