import db from "../database/db.js";

export async function deleteCarRepo(id: string){
    return db.query(`
        DELETE FROM cars WHERE id = $1
    `,[id])
}