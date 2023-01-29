import { Car } from "@prisma/client";
import prisma from "../database/db.js";

export async function getAllCars(): Promise<Car[]> {
  const cars = await prisma.car.findMany();
  return cars;
}

export async function getCarById(id: number): Promise<Car> {
  const car = await prisma.car.findUnique({
    where: {
      id,
    },
  });
  return car;
}
