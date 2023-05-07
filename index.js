const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')
const destinationsData = require('./JsonData/BDtravel.json')
app.use(cors())

app.get('/', (req, res)=>{
    res.send('hello from travel guru server')
})

app.get('/destinations', (req, res)=>{
    res.send(destinationsData)
})
app.get('/destination/:id', (req, res)=>{
    const unique = req.params.id
    const singleData = destinationsData.destinations.find(data => parseInt(data.id) === parseInt(unique))
    res.send(singleData)
})

app.listen(port, ()=>{
    console.log('Our travel guru server is running perfectly!');
})