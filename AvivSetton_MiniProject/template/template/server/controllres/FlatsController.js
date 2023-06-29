const db = require('../db.js');

function getAllFlats(req, res) {
    res.json(db.getAllFlats());
}

function getFlatsByID(req, res) {
    res.jason(db.getFlatsByID(req.parms.id));
}
function insertNewFlats(req, res) {
    db.insertNewFlats(req.body.name, req.body.price)
    res.status(201).send(`Flats ${req.body.name}was insert`)
}

function deleteFlatsByID(req, res) {
    db.deleteFlatsBy(req.parms.id)
    res.send(`Flats with id ${req.parms.id} was deleted`)
}

function updateFlatsByID(req, res) {
    db.updateFlatsByID(req.parms.id, req.body)
    res.send(`Flats with id ${req.parms.id} was updated`)

}

module.exports = {
    getAllFlats,
    getFlatsByID,
    insertNewFlats,
    deleteFlatsByID,
    updateFlatsByID,
};