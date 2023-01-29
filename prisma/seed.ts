import prisma from "../src/database/db.js";

async function main() {
  await prisma.brand.createMany({
    data: [
      { name: "BMW" },
      { name: "Audi" },
      { name: "Mercedes" },
      { name: "Porsche" },
      { name: "Bugatii" },
    ],
  });
  await prisma.color.createMany({
    data: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
      { name: "Red", hex: "#FF0000" },
    ],
  });
  await prisma.car.createMany({
    data: [
      {
        name: "X6",
        brandId: 1,
        colorId: 2,
        price: 700_000,
        year: "2020",
      },
      {
        name: "RSQ8",
        brandId: 2,
        colorId: 2,
        price: 1_000_000,
        year: "2020",
      },
      {
        name: "Cayenne",
        brandId: 4,
        colorId: 1,
        year: "2020",
        price: 750_000,
      },
    ],
  });
}

main()
  .then(() => console.log("Seed com sucesso"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
