import { Car } from "@prisma/client";
import Joi from "joi";

const carSchema = Joi.object<Car>({
    name: Joi.string().required(),
    brandId: Joi.number().required(),
    colorId: Joi.number().required(),
    year: Joi.string().regex(/^(19|20)\d{2}$/).required(),
    price: Joi.number().required()
})

export default carSchema;