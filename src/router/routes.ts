import { Router } from "express";
import { Request, Response } from "express";
import { postCar } from "../controllers/postCar.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import carSchema from "../schemas/carSchema.js";

const router = Router();

router.get("/health", (req: Request, res: Response) => res.sendStatus(200));
router.post("/cars", validateSchema(carSchema), postCar);

export default router;
