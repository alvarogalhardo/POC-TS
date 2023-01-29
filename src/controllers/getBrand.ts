import { Request,Response } from "express";
import { AplicationError } from "../errors/genericError.js";
import services from "../services/services.js";

export async function getBrand(req:Request,res:Response) {
    const {id} = req.params;
    try{
        const brand = await services.getBrandById(Number(id));
        if(brand === null) return res.sendStatus(404);
        return res.status(200).send(brand)
    }catch(err){
        console.error(err);
        return res.status(500).send(AplicationError());
    }
}