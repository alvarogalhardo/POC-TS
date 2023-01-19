import { Request, Response } from "express";
import { deleteCarRepo } from "../repositories/deleteCar.js";

export async function deleteCar(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await deleteCarRepo(Number(id));
    res.sendStatus(200);
    return;
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
    return;
  }
}
