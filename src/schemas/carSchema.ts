import Joi, { string } from "joi";

const carSchema = Joi.object({
    name: Joi.string().required(),
    brand: Joi.string().required(),
    color: Joi.string().hex().required(),
    year: Joi.string().regex(/^(19|20)\d{2}$/).required(),
    price: Joi.number().required()
})

export default carSchema;