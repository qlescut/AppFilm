import Joi from 'joi';

const movieValidation = (body) => {
    const MovieSchema = Joi.object({
        title : Joi.string().min(3).max(100).trim().required(),
        synopsis : Joi.text().min(3).max(500).trim().required(),
        director : Joi.string().min(3).max(50).trim().required(),
        actors : Joi.text().min(3).max(500).trim().required(),
        note : Joi.number().required(),
        pseudo : Joi.string().min(3).max(50).trim().required(),
        noteOpinion : Joi.number().required(),
        message : Joi.text().min(3).max(500).trim().required()
    });
    return MovieSchema.validate(body);
};

export default movieValidation;