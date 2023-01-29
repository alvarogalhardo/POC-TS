import { deleteCarRepo } from "../repositories/deleteCar.js";
import { updateCarRepo } from "../repositories/updateCar.js";
import { getAllCars, getCarById } from "../repositories/getCars.js";
import { insertCar } from "../repositories/insertCar.js";
import { AplicationError } from "../errors/genericError.js";
import { Brand, Car } from "@prisma/client";
import brandRepository from "../repositories/getBrand.js";

async function deleteCar(id: number): Promise<boolean> {
  try {
    const exists = await getCar(id);
    if (exists === null) {
      return null;
    }
    await deleteCarRepo(id);
    return true;
  } catch (err) {
    console.error(err);
    throw AplicationError();
  }
}

async function getCars(): Promise<Car[]> {
  try {
    const cars = await getAllCars();
    return cars;
  } catch (error) {
    console.error(error);
    throw AplicationError();
  }
}

async function getCar(id: number): Promise<Car> {
  try {
    const car = await getCarById(id);
    if (!car) {
      return null;
    }
    return car;
  } catch (err) {
    console.error(err);
    throw AplicationError();
  }
}

async function postCar(car: Car): Promise<boolean> {
  const { name, brandId, colorId, year, price } = car;
  try {
    await insertCar(name, brandId, colorId, year, price);
    return true;
  } catch (err) {
    console.error(err);
    throw AplicationError();
  }
}

async function updateCar(id: number, newCar: Car): Promise<boolean> {
  const { name, brandId, colorId, year, price } = newCar;
  await updateCarRepo(name, brandId, colorId, year, price, id);
  return true;
}

async function getBrandById(id: number): Promise<Brand> {
  const brand = await brandRepository.getBrand(id);
  if (!brand) return null;
  return brand;
}

const services = {
  deleteCar,
  getCars,
  getCar,
  postCar,
  updateCar,
  getBrandById,
};

export default services;
