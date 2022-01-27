import Movie from '../models/movies.js';
import movieValidation from '../validation/movieValidation.js';

const getAll = (req, res) => {
    Movie.findAll({
        attributes : {exclude : ('createdAt', 'updatedAt')}
    })
    .then(movies => {
        res.status(200).json(products)
    })
    .catch(error => res.status(500).json)
};

const getOne = (req, res) => {
    const {id} =req.params
    Movie.findByPk(id)
    .then(movie => {
        if(movie) return res.status(404).json({msg : 'Not found'})
        res.status(200).json(movie)
    })
    .catch(error => res.status(500).json)
};

const createOne = (req, res) => {
    const {body} = req
    const {error} = movieValidation(body)
    if (error) return res.status(401).json(error.details(0).message)
    Movie.create({...body})
    .then(( ) => {
        res.status(201).json({msg : 'Created Ressource'})
    })
    .catch(error => res.status(500).json)
};

const updateOne = (req, res) => {
    const {id} =req.params
    const {body} = req;
    Movie.findByPk(id)
    .then(product => {
        if(movie) return res.status(404).json({msg : 'Not found'})
        movie.title=body.title
        movie.save()
        .then(() => res.status(201).json({msg : "updated Ressource"}))
        .catch(error => res.status(500).json)
    })
    .catch(error => res.status(500).json)
};

const deleteOne = (req, res) => {
    const {id} =req.params
    Movie.destroy({where : {id : id}})
    .then(ressource =>{
        if (ressource === 0) return res.status(404).json({msg : 'Not found'})
        res.status(200).json({msg : "deleted Resource"})
    })

    .catch(error => res.status(500).json)
};

export {getAll, getOne, createOne, updateOne, deleteOne};