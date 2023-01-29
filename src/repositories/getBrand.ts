import { Brand } from "@prisma/client";
import prisma from "../database/db.js";

async function getBrand(id: number): Promise<Brand> {
  const brand = await prisma.brand.findUnique({
    where: {
      id,
    },
  });
  return brand;
}
const brandRepository = {
  getBrand,
};
export default brandRepository;
