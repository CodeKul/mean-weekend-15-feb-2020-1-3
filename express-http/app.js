const port = 3000

const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
const carController = require('./car-controller.js')

const app = express()
app.use(fileUpload());
app.all('/dtm', (req, res) => {
    console.log(`Calc Executed`)
    req.next()
})
app.use(carController)
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (request, response) => response.send('Hello World!'))
app.get('/dtm', (request, response) => {
    console.log(request)

    response.send({ date: new Date() })
})
app.post('/obj', jsonParser, (request, response) => {
    console.log(request.body)
    response.send({ obj: request.body, date: new Date() })
})
app.post('/calc', jsonParser, (req, res) => {
    console.log(`Calculator`)
    res.send({ result: eval(`${req.body['num1']}${req.body['op']}${req.body['num2']}`) })
})
app.post('/form', urlencodedParser, (req, res) => {
    console.log(`form`)
    res.send(req.body.address)
})
app.get('/form/:id', urlencodedParser, (req, res) => {
    console.log(`form`)
    res.set('Content-Type', 'application/json') //header
    res.send({ routePrams: req.params, queryParams: req.query })
})

app.post('/upload', function (req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    const sampleFile = req.files.sampleFile;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(`./${sampleFile.name}`, function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});
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