import { QueryResult } from "pg";
import db from "../database/db.js";

export async function getAVG() {
    return db.query(`
        SELECT AVG(price) as average FROM cars;
    `)
}