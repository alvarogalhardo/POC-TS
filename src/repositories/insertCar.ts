import { Car } from "@prisma/client";
import prisma from "../database/db.js";

export async function insertCar(
  name: string,
  brandId: number,
  colorId: number,
  year: string,
  price: number
): Promise<Car> {
  const posted = await prisma.car.create({
    data: {
      name: name,
      brandId: brandId,
      year: year,
      colorId: colorId,
      price: price,
    },
  });
  return posted;
}
