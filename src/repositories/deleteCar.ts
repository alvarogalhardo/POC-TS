import { Car } from "@prisma/client";
import prisma from "../database/db.js";

export async function deleteCarRepo(id: number): Promise<Car> {
  const deleted = await prisma.car.delete({
    where: {
      id,
    },
  });
  return deleted;
}
