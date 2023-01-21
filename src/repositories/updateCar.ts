import db from "../database/db.js";

export async function updateCarRepo(
  name: string,
  brand: string,
  color: string,
  year: string,
  price: number,
  id: string
) {
  return db.query(
    `
        UPDATE 
            cars 
        SET name = $1, 
            brand = $2, 
            color = $3, 
            year = $4, 
            price =$5 
        WHERE 
            id = $6
    `,
    [name, brand, color, year, price, id]
  );
}

export async function getCarById(id:string){
    return db.query(`
        SELECT * FROM cars WHERE id = $1
    `,[id])
}
