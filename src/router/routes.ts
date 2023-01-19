import { Router } from "express";
import { Request, Response } from "express";
import { deleteCar } from "../controllers/deleteCars.js";
import { getCars } from "../controllers/getCar.js";
import { postCar } from "../controllers/postCar.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import carSchema from "../schemas/carSchema.js";

const router = Router();

router.get("/health", (req: Request, res: Response) => res.sendStatus(200));
router.post("/cars", validateSchema(carSchema), postCar);
router.delete("/cars/:id", deleteCar);
router.get("/cars", getCars);

export default router;
