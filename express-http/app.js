const express = require('express')

const app = express()

const port = 3000

app.get('/', (request, response) => response.send('Hello World!'))
app.get('/dtm', (request, response) => {
    console.log(request)

    response.send({ date: new Date() })
})
app.post('/obj', (request, response) => {
    console.log(request['query'])

    response.send({ obj : request.body, date : new Date() })
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