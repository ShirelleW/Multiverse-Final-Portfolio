const sequelize = require('../db');
const Shoe = require('../models/Shoe');
const debug = require('debug')('app:controllers');
const {validationResult} = require('express-validator');
const { response } = require('express');

/**
 * @desc Gets all sneakers
 * @route GET /api/sneakers
 * @access Public
 */
exports.getAllShoes = async (req, res) => {
    try {
        // GET ALL SHOES
        const shoes = await Shoe.findAll();

        if(!shoes) {
            res.status(400).json({
                success: false,
                message: 'No shoes found!',
            });
        } else {
            res.status(200).json({
                shoes,
                success: true,
                message: 'All shoes returned'
            })
        }
    } catch (error) {
        debug(error);
        res.status(400).json({
            success: false,
            message: `ERROR: ${error.message}`
        });
    }
};

/**
 * @desc Get one shoe by id
 * @route GET /api/sneakers/:id
 * @access Public
 */
exports.getShoeById = async (req, res) => {
    const shoeId = req.params.id;

    try {
        const shoe = await Shoe.findByPk(shoeId);

        // CHECK IF SHOE ID IS VALID OR NOT
        if(!shoe) {
            res.status(400).json({
                success: false,
                message: `Shoe not found - Check shoe id!`
            })
        } else {
            res.status(200).json({
                shoe,
                success: true,
                message: `Shoe found succesfully!`
            })
        }
    } catch (error) {
        debug(error);
        res.status(400).json({
            success: false,
            message: `Shoe not found - ERROR: ${error.message}`
        })
    }
};

/**
 * @desc Delete a shoe
 * @route DELETE /api/sneakers/delete/:id
 * @access Private
 */
exports.deleteShoeById = async (req, res) => {
    const shoeId = req.params.id;

    try {
        const shoeToDelete = await Shoe.findByPk(shoeId);
        const deletedShoe = await shoeToDelete.destroy();

        // DELETE SHOE
        res.status(200).json({
            deletedShoe,
            success: true,
            message: `Shoe deleted succesfully!`
        });
    } catch (error) {
        debug('ERROR: ', error);
        res.status(400).json({
            success: false,
            message: `Unable to delete shoe - ERROR: ${error.message}`
        });
    }
};


/**
 * @desc Create a single shoe
 * @route POST /api/sneakers/create
 * @access Private
 */
exports.createShoe = async (req, res) => {
    const errors = validationResult(req);

    // CHECK FOR EMPY ERROR ARRAY
    if(!errors.isEmpty()) {
        res.status(400).json({
            success: false,
            error: errors.array()
        })
    } else {
        try {
            // GRAB BODY OF REQ
            const newShoe = req.body;
            // USE CREATE FUNCTION IN SEQUELIZE TO CREATE SHOE
            const createdShoe = await Shoe.create(newShoe);
            res.status(200).json({
                createdShoe,
                success: true,
                message: `Shoe created succesfully!`
            });
        } catch (error) {
            debug(error);
            res.status(400).json({
                success: false,
                message: `Shoe not created - ERROR: ${error.message}`
            });
        }
    }  
};

/**
 * @desc Update a single shoe
 * @route PUT /api/sneakers/:id
 * @access Private
 */
exports.updateShoe = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        res.status(400).json({
            success: false,
            error: errors.array()
        });
    } else {
        const shoeId = req.params.id;
        const updates = req.body;

        try {
            // FIND SHOE BY ID
            const shoeToUpdate = await Shoe.findByPk(shoeId);
            // UPDATE SHOE WITH THE UPDATESS ENTERED BY USER
            const updatedShoe = await shoeToUpdate.update(updates);

            res.status(200).json({
                updatedShoe,
                success: true,
                message: `Shoe updated succesfully!`
            });
        } catch (error) {
            debug(error);
            res.status(400).json({
                success: false,
                message: `Unable to update shoe - ERROR: ${error.message}`
            });
        }    
    }
};