import db from "../database/db.js";

export async function insertCar(
  name: string,
  brand: string,
  color: string,
  year: string,
  price: number
) {
  return db.query(
    `
        INSERT INTO cars (name,brand,color,year,price)
        VALUES ($1, $2, $3, $4, $5)
    `,
    [name, brand, color, year, price]
  );
}
