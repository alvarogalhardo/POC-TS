import { Request,Response } from "express";
import { Car } from "../types/carType.js";

export async function postCar(req:Request,res:Response){
    const car = req.body as Car;
    try{
        
    } catch (err){
        console.error(err);
        res.sendStatus(500);
        return
    }
}   