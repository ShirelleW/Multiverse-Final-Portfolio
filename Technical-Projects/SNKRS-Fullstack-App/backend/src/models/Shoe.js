const sequelize = require('../db');
const { Sequelize } = require('sequelize');

const Shoe = sequelize.define('shoe', {
    brand_name: Sequelize.STRING,
    grid_picture_url: Sequelize.STRING,
    name: Sequelize.STRING,
    release_date: Sequelize.STRING,
    retail_price: Sequelize.DECIMAL,
    silhouette: Sequelize.STRING,
    story_html: Sequelize.TEXT('long'),
});

module.exports = Shoe;