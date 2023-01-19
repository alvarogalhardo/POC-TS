import db from "../database/db.js";

export async function getAllCars(){
    return db.query(`
        SELECT * FROM cars
    `)
}