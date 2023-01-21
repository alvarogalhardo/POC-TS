import { NextFunction, Request, Response } from "express";
import { AplicationError } from "../errors/genericError.js";
import { getCarById, updateCarRepo } from "../repositories/updateCar.js";
import services from "../services/services.js";
import { Car } from "../types/carType.js";

export async function updateCar(req: Request, res: Response) {
    const { id } = req.params;
    const newCar = req.body as Car;
  try {
    await services.updateCar(id,newCar)
    res.sendStatus(200);
    return;
  } catch (err) {
    console.error(err);
    res.status(500).send(AplicationError());
    return;
  }
}
