import { Car } from "@prisma/client";
import prisma from "../database/db.js";

export async function updateCarRepo(
  name: string,
  brandId: number,
  colorId: number,
  year: string,
  price: number,
  id: number
): Promise<Car> {
  const updated = await prisma.car.upsert({
    where: {
      id: id,
    },
    create: {
      name,
      brandId,
      year,
      colorId,
      price,
    },
    update: {
      name,
      brandId,
      year,
      colorId,
      price,
    },
  });
  return updated;
}

export async function getCarById(id: number): Promise<Car> {
  const car = await prisma.car.findUnique({
    where: {
      id,
    },
  });
  return car;
}
