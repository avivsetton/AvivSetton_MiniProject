const express = require('express');
const router = express.Router();
const{

    getAllFlats,
    getFlatsByID,
    insertNewFlats,
    deleteFlatsByID,
    updateFlatsByID
}= require('../controllres/FlatsController.js');


router.route('/')
.get(getAllFlats)
.post(insertNewFlats);

router.route('/:id')
.get(getFlatsByID)
.delete(deleteFlatsByID)
.patch(updateFlatsByID);

module.exports=router;
