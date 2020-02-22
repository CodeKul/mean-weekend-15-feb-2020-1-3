const fs = require('fs')
const htpd = require('html-pdf')
const Handlebars = require('handlebars')

const options = { format: 'Letter' };
const html = fs.readFileSync('./booking.html', 'utf8');

let template = Handlebars.compile(html);
let result = template({ name: 'andegdfghfhfghroid' })

htpd.create(result, options).toFile('./booking-confirmation.pdf', (err, res) => {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
});




/*
let name = 'android'

let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        Hi ... ${name}
        
        This is your ticket, present while entering the theater
    </div>
</body>
</html>
`*/
