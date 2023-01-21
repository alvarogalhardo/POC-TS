import db from "../database/db.js";

export async function getAllCars(){
    return db.query(`
        SELECT * FROM cars
    `)
}

export async function getCarById(id:string){
    return db.query(`
        SELECT * FROM cars WHERE id = $1
    `,[id])
}