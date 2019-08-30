require('dotenv').config()
const express = require('express')
const cors = require('cors')
const massive = require('massive')

const controller = require('./controller')

const{SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()


app.use(express.json())
app.use(cors())

massive(CONNECTION_STRING)
.then(dbInstance =>{
    app.set('db', dbInstance)
    console.log('Database Connected')
})
.catch(error => {
    console.log(error)
})

app.get('/api/houses', controller.getHouses)
app.post('/api/houses', controller.addHouse)
app.delete('/api/houses/:id', controller.deleteHouse)

app.listen(SERVER_PORT, () => {
    console.log('Server Running')

})