import { Request, Response } from "express";
import { getAllCars } from "../repositories/getCars.js";

export async function getCars(req: Request, res: Response) {
  try {
    const { rows } = await getAllCars();
    res.status(200).send(rows);
    return;
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
    return;
  }
}
