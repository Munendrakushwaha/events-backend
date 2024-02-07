import { Router } from 'express';
import multer, { type Multer } from 'multer';
import { Controller } from '.';

const upload: Multer = multer({ dest: 'uploads/' });
const router: Router = Router();

router.route('/create').post(Controller.add);


router.route('/getBulk').get(Controller.getBulk);


router.route('/get').get(Controller.get)

/**
 * @swagger
 * /events/getById/{id}:
 *   get:
 *     tags:
 *       -  Events API - Get an Events by id"
 *     summary: Returns all events.
 *     description: Retrieves a events matched to that id.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Parameter description in CommonMark or HTML.
 *         schema:
 *           type: string
 *           example: "658978c8b133a70e00173968"
 *     responses:
 *       '200':
 *         description: An events retrieved successfully.
 *       '400':
 *         description: Not found.
 *       '500':
 *         description: Internal server error.
 */

router.route('/getById/:id').get(Controller.getById);

/**
 * @swagger
 * /events/updateById/{id}:
 *   put:
 *     tags:
 *       - Events API - Update an Events by id
 *     summary: Update an event.
 *     description: Update an event matched to the specified ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Conference Event - 4860"
 *                 description: Name of the event.
 *               address:
 *                 type: object
 *                 properties:
 *                   street:
 *                     type: string
 *                     example: "598 Elm St."
 *                   city:
 *                     type: string
 *                     example: "New York"
 *
 *                   state:
 *                     type: string
 *                     example: "NY"
 *                   postalCode:
 *                     type: string
 *                     example: "19236"
 *                   country:
 *                     type: string
 *                     example: "USA"
 *               description:
 *                 type: string
 *                 example: "A Conference event happening in the heart of Seattle."
 *               startDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-07-19T18:30:00.000Z"
 *               endDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-09-29T18:30:00.000Z"
 *               category:
 *                 type: string
 *                 example: "Theater"
 *               organizerInfo:
 *                 type: string
 *                 example: "Eventbrite"
 *               type:
 *                 type: string
 *                 example: "Class"
 *               status:
 *                 type: string
 *                 example: "Registration open"
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Parameter description in CommonMark or HTML.
 *         schema:
 *           type: string
 *           example: "658978c8b133a70e00173968"
 *     responses:
 *       '200':
 *         description: An event updated successfully.
 *       '400':
 *         description: Not found.
 *       '500':
 *         description: Internal server error.
 */
router.route('/updateById/:id').put(Controller.updateById);

/**
 * @swagger
 * /events/deleteById/{id}:
 *   delete:
 *     tags:
 *       - Events API - Delete an event by id
 *     summary: Delete all events matched to that id.
 *     description: Delete all events matched to that id.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Parameter description in CommonMark or HTML.
 *         schema:
 *           type: string
 *           example: "658978c8b133a70e00173968"
 *     responses:
 *       '200':
 *         description: An events deleted successfully.
 *       '400':
 *         description: Not found.
 *       '500':
 *         description: Internal server error.
 */

router.route('/deleteById/:id').delete(Controller.deleteById);

/**
 * @swagger
 * /events/upload:
 *   post:
 *     tags:
 *       -  Events API - Bulk Upload
 *     summary: Uploads a CSV file.
 *     description: Endpoint to upload a CSV file.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               csvFile:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: File uploaded successfully.
 *       '400':
 *         description: Bad request or invalid file format.
 *       '500':
 *         description: Internal server error.
 */

router.route('/getByUploadId/:uploadId').get(Controller.getByUploadId);
router.route('/upload').post(upload.single('csvFile'), Controller.uploadCsv);

export default router;
