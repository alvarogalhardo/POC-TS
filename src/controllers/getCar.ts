import { Car } from "@prisma/client";
import { Request, Response } from "express";
import { AplicationError } from "../errors/genericError.js";
import services from "../services/services.js";

export async function getCars(req: Request, res: Response) {
  try {
    const cars: Car[] = await services.getCars();
    if(cars === null) return res.sendStatus(404);
    return res.status(200).send(cars);
  } catch (err) {
    console.error(err);
    return res.status(500).send(AplicationError());
  }
}

export async function getCarById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const car: Car = await services.getCar(Number(id));
    if (car === null) {
      return res.sendStatus(404);
    }
    return res.status(200).send(car);
  } catch (err) {
    console.error(err);
    return res.status(500).send(AplicationError());
  }
}
