import { Car } from "@prisma/client";
import { Request, Response } from "express";
import { AplicationError } from "../errors/genericError.js";
import services from "../services/services.js";

export async function updateCar(req: Request, res: Response) {
  const { id } = req.params;
  const newCar = req.body as Car;
  try {
    await services.updateCar(Number(id), newCar);
    return res.sendStatus(200);
  } catch (err) {
    console.error(err);
    return res.status(500).send(AplicationError());
  }
}
