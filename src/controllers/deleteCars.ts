import { Request, Response } from "express";
import { AplicationError } from "../errors/genericError.js";
import services from "../services/services.js";

export async function deleteCar(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const deleted = await services.deleteCar(Number(id));
    if(deleted === null){
      return res.sendStatus(404)
    }
    return res.sendStatus(200);
  } catch (err) {
    console.error(err);
    return res.status(500).send(AplicationError());
  }
}
