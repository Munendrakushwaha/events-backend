import Joi from 'joi';

class JoiSchema {
    static bulkUpload = (): Joi.ObjectSchema<any> => Joi.object({
        name: Joi.string().required().min(5),
        address: Joi.object({
            street: Joi.string().required().min(1),
            city: Joi.string().required().min(1),
            state: Joi.string().required().min(1),
            postalCode: Joi.string().required().min(1),
            country: Joi.string().required().min(1),
        }).required(),
        description: Joi.string().required().min(10),
        startDate: Joi.date().required().min(10),
        endDate: Joi.date().greater(Joi.ref('startDate')).required().min(10),
        category: Joi.string().required().min(3),
        organizerInfo: Joi.string().required().min(3),
        type: Joi.string().required().min(3),
        status: Joi.string().required().min(3),
    });
}
export default JoiSchema;
