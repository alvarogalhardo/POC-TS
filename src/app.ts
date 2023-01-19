import express,{json} from "express";
import router from "./router/routes.js";

const app = express();

app.use(json())
app.use(router)

app.listen(4000,()=>console.log("Running"))