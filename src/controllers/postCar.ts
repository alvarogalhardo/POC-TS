import { Car } from "@prisma/client";
import { Request, Response } from "express";
import { AplicationError } from "../errors/genericError.js";
import services from "../services/services.js";

export async function postCar(req: Request, res: Response) {
  const car = req.body as Car;
  try {
    await services.postCar(car);
    return res.status(201).send({ message: "Ok!" });
  } catch (err) {
    console.error(err);
    return res.status(500).send(AplicationError());
  }
}
