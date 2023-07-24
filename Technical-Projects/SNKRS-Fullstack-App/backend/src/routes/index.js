const express = require('express');
const debug = require('debug')('app:routes');

const sequelize = require('../db');
const Shoe = require('../models/Shoe');

const {check} = require('express-validator');

const router = express.Router();

const {
    getAllShoes,
    getShoeById,
    deleteShoeById,
    createShoe,
    updateShoe
} = require('../controllers/index');

// GET SINGLE SHOE BY ID
router.get('/sneakers/:id', getShoeById);

// DELETE A SHOE
router.delete('/sneakers/:id', deleteShoeById);

// CREATE A SHOE
router.post('/sneakers', [
    check('brand_name').not().isEmpty().trim(),
    check('grid_picture_url').not().isEmpty().trim(),
    check('name').not().isEmpty().trim(),
    check('release_date').not().isEmpty().trim(),
    check('retail_price').custom((value) => value > 0),
    check('silhouette').not().isEmpty().trim(),
    check('story_html').not().isEmpty().trim(),
],
createShoe
);

// UPDATE A SHOE
router.put('/sneakers/edit/:id', [
    check('brand_name').not().isEmpty().trim(),
    check('grid_picture_url').not().isEmpty().trim(),
    check('name').not().isEmpty().trim(),
    check('release_date').not().isEmpty().trim(),
    check('retail_price').custom((value) => value > 0),
    check('silhouette').not().isEmpty().trim(),
    check('story_html').not().isEmpty().trim(),
],
updateShoe
);

// GET ALL SNEAKERS
router.get('/sneakers', getAllShoes)

module.exports = router;