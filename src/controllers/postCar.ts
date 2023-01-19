import { Request, Response } from "express";
import { insertCar } from "../repositories/insertCar.js";
import { Car } from "../types/carType.js";

export async function postCar(req: Request, res: Response) {
  const { name, brand, color, year, price } = req.body as Car;
  try {
    await insertCar(name, brand, color, year, price);
    res.status(201).send({ message: "Ok!" });
    return;
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
    return;
  }
}
