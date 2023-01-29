import { Request, Response, Router } from "express";
import { deleteCar } from "../controllers/deleteCars.js";
import { getBrand } from "../controllers/getBrand.js";
import { getCarById, getCars } from "../controllers/getCar.js";
import { postCar } from "../controllers/postCar.js";
import { updateCar } from "../controllers/updateCar.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import carSchema from "../schemas/carSchema.js";

const router = Router();

router.get("/health", (req: Request, res: Response) => res.sendStatus(200));
router.post("/cars", validateSchema(carSchema), postCar);
router.delete("/cars/:id", deleteCar);
router.get("/cars", getCars);
router.get("/cars/:id", getCarById);
router.put("/cars/:id", validateSchema(carSchema), updateCar);
router.get("/brand/:id", getBrand);
export default router;
