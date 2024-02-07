import { Router } from 'express';
import controllerInstance from './controller';
import { Validation, Authentication } from './middleware';

const router: Router = Router();

/**
 * @swagger
 * /users/login:
 *   post:
 *     tags:
 *       - User API - Login
 *     summary: Give access to a user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: "monu@gmail.com"
 *              password:
 *                type: password
 *                example: "MOnu@123"
 *     responses:
 *       '200':
 *         description: accessed.
 *       '500':
 *         description: Internal server error.
 */
router
    .route('/login')
    .post(Authentication.authenticate, controllerInstance.login);


/**
 * @swagger
 * /users/register:
 *   post:
 *     tags:
 *       - User API - Register
 *     summary: Give access to a user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: "munendra kushwaha"
 *              email:
 *                type: string
 *                example: "munendra@gmail.com"
 *              password:
 *                type: password
 *                example: "Monu@4556"
 *              address:
 *                type: string
 *                example: "Mathura, Uttar Pradesh"
 *              phone:
 *                type: string
 *                example: "9878423898"
 *     responses:
 *       '200':
 *         description: Registered Successfully
 *       '400':
 *         description: Not Registered
 *       '500':
 *         description: Internal server error.
 */
router
    .route('/register')
    .post(Validation.validate, controllerInstance.register);

export default router;
