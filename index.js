
const express = require('express')
const app = express()
const places = require('./data/placeDetails.json')
const hoteDetails = require('./data/hotelDetails.json')

const port = 5000

const cors = require('cors')
app.use(cors())

app.get('/',(req,res)=>{
    res.send('this is server')

})

app.get('/place',(req,res)=>{
    res.send(places)

})

app.get('/placeDetails/:id',(req,res)=>{
    const id =  parseInt(req.params.id)
    const findDetails = places.find(pf => parseInt( pf.id) === id)
    res.send(findDetails)

})




app.get('/hotelDetails/:id',(req,res)=>{
    const id = parseInt(req.params.id )
    const hotelFilter = hoteDetails.filter(cf => parseInt(cf.place_id) === id)
    res.send(hotelFilter)

})
app.listen(port,()=>{
    console.log(`this is port number is ${port}`)
})