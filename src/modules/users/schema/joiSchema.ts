import Joi from 'joi';

class JoiSchema {
    static register = (): Joi.ObjectSchema<any> => Joi.object({
        name: Joi.string().alphanum().min(3).max(15)
            .required(),
        email: Joi.string().email({
            minDomainSegments: 2,
            tlds: { allow: ['com', 'in', 'net'] },
        }),
        password: Joi.string()
            .pattern(/^(?=.*[@$])(?=.*[a-zA-Z0-9]).{3,30}$/)
            .required(),
        address: Joi.string().min(10).max(50).required(),
        phone: Joi.string().alphanum().length(10).required(),
    });
}
export default JoiSchema;
