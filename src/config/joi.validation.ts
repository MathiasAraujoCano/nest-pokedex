/* eslint-disable prettier/prettier */
// instalamos el paquete joi con yarn add joi

import * as Joi from 'joi'; // debemos importarlo de esta manera para que funcionen todo el paquete

export const JoiValidationSchema = Joi.object({
    MONGODB: Joi.required(),
    PORT: Joi.number().default(3005),
    DEFAULT_LIMIT: Joi.number().default(6),
})
