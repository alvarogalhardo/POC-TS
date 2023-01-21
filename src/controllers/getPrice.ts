import { Request, Response } from "express";
import { AplicationError } from "../errors/genericError.js";
import services from "../services/services.js";

export async function getPriceAVG(req: Request, res: Response) {
  try {
    const average = await services.getPrice();
    return res.status(200).send(average);
  } catch (error) {
    console.error(error);
    res.sendStatus(500).send(AplicationError());
  }
}
