import { Error } from "../types/error.js";

export function AplicationError(): Error{
    return {
        name:"Aplication Error",
        message:"Something went wrong! Try again later."
    };
}