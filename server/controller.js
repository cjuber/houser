const getHouses =  (req,res) => {
    const db = req.app.get('db')
    db.get_houses().then((houses) => {
        res.status(200).send(houses)
    })
    .catch((err) => {
        console.log(err)
    })
}
addHouse = (req,res) => {
    const {name, address, city, state, zip} = req.body
    const db = req.app.get('db')
    db.add_house(name,address,city,state,zip).then(() => {
        res.status(200).send('all good')
    })
    .catch((err) => {
        console.log(err)
    })
}
deleteHouse = (req,res) => {
const {id} = req.params
const db = req.app.get('db')
db.delete_house(id).then((houses) => {
    res.status(200).send(houses)
})
.catch((err) => {
    console.log(err)
})
}
module.exports = {

    getHouses,
    addHouse,
    deleteHouse
}