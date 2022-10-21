var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config();
const app = express()

app.use(cors());
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})
// You could call it aylienapi, or anything else
var textapi = new aylien({
    application_id:process.env.APP ,
    application_key: process.env.KEY
});
app.post("/scan", (req, res) => {
    console.log(req.body)
    textapi.sentiment({
        'url': req.body.url
    }, function (error, response) {
        console.log(response)
        console.log(error)
        res.json(response)
    });
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
