import { Request, Response } from "express";
import services from "../services/services.js";

export async function deleteCar(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const deleted = await services.deleteCar(id);
    if(deleted === null){
      return res.sendStatus(404)
    }
    res.sendStatus(200);
    return;
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
    return;
  }
}
