const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://beatrizlirios:<Bi@35382048>@cluster0.neshet6.mongodb.net/?retryWrites=true&w=majority";


MongoClient.connect(uri, (err, client) => {
    if (err)  return console.log(err)
    db = client.db('Teste') 
})


app.listen(3000, function(){
    console.log('server running on port 3000')
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/show', (req, res) => {
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('salvo no banco de dados')
        res.redirect('/')
    })
   
})