import { Request, Response } from "express";
import { AplicationError } from "../errors/genericError.js";
import services from "../services/services.js";

import { Car } from "../types/carType.js";

export async function postCar(req: Request, res: Response) {
  const car = req.body as Car;
  try {
    await services.postCar(car);
    res.status(201).send({ message: "Ok!" });
    return;
  } catch (err) {
    console.error(err);
    res.status(500).send(AplicationError());
    return;
  }
}
