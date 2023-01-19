import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

// const db = new Pool({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
//   port: Number(process.env.PORT),
// });

const db = new Pool({
  host: "localhost",
  user: "postgres",
  password: "91Dc001832//",
  port: 5432,
  database: "carpoc",
});

export default db;
