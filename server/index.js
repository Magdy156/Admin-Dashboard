import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";

// ROUTES

import clientRoutes from "./routes/client.js"
import generalRoutes from "./routes/general.js"
import salesRoutes from "./routes/sales.js"
import manageRoutes from "./routes/manage.js"

// CONFIGURATIONS & MiddleWares

dotenv.config();
const app = express()
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

// MONGO Connection
const port = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(port, () => console.log(`server works on port ${port}`))
}).catch((err) => console.log(err))