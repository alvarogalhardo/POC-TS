import { Error } from "../types/carType.js";

export function AplicationError(): Error{
    return {
        name:"Aplication Error",
        message:"Something went wrong! Try again later."
    };
}