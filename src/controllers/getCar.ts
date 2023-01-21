import { Request, Response } from "express";
import { getAllCars } from "../repositories/getCars.js";
import services from "../services/services.js";
import { Car } from "../types/carType.js";

export async function getCars(req: Request, res: Response) {
  try {
    const cars: Car[] = await services.getCars();
    res.status(200).send(cars);
    return;
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
    return;
  }
}

export async function getCarById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const car: Car = await services.getCar(id);
    if (car === null) {
      return res.sendStatus(404);
    }
    res.status(200).send(car);
    return 
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
    return;
  }
}
