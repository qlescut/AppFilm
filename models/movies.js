import sequelize from 'sequelize';
import db from '../db/db.js';

const {DataTypes} = sequelize;
const Movie = db.define('movie', {
    id: {
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey : true, 
        autoIncrement : true, 
        allowNull : false, 
    },
    title : {
        type : DataTypes.STRING, 
        allowNull : false,
    },
    synopsis : {
        type : DataTypes.TEXT, 
        allowNull : false,
    }, 
    director : {
        type : DataTypes.STRING, 
        allowNull : false,
    },
    actors : {
        type : DataTypes.TEXT, 
        allowNull : false,
    },
    note : {
        type: DataTypes.INTEGER,
        allowNull : false,
    },
    pseudo : {
        type : DataTypes.STRING, 
        allowNull : false,
    },
    noteOpinion : {
        type: DataTypes.INTEGER,
        allowNull : false,
    },
    message : {
        type : DataTypes.TEXT, 
        allowNull : false,
    }, 
});

export default Movie;