import { deleteCarRepo } from "../repositories/deleteCar.js";
import { updateCarRepo } from "../repositories/updateCar.js";
import { getAllCars, getCarById } from "../repositories/getCars.js";
import { insertCar } from "../repositories/insertCar.js";
import { AplicationError } from "../errors/genericError.js";
import { Car } from "../types/carType.js";
import { getAVG } from "../repositories/getPrice.js";

async function deleteCar(id: string) {
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

async function getCars() {
  try {
    const { rows } = await getAllCars();
    return rows;
  } catch (error) {
    console.error(error);
    throw AplicationError();
  }
}

async function getCar(id: string) {
  try {
    const { rows } = await getCarById(id);
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  } catch (err) {
    console.error(err);
    throw AplicationError();
  }
}

async function postCar(car: Car) {
  const { name, brand, color, year, price } = car;
  try {
    await insertCar(name, brand, color, year, price);
    return true;
  } catch (err) {
    console.error(err);
    throw AplicationError();
  }
}

async function updateCar(id: string, newCar: Car) {
  const { name, brand, color, year, price } = newCar;
  await updateCarRepo(name, brand, color, year, price, id);
  return true;
}

async function getPrice() {
  try {
    const average: number = (await getAVG()).rows[0].average;
    const result = (average).toFixed(2);
    return result;
  } catch (err) {
    console.error(err);
    throw AplicationError();
  }
}

const services = {
  deleteCar,
  getCars,
  getCar,
  postCar,
  updateCar,
  getPrice,
};

export default services;
