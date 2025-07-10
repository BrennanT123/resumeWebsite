import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient, Prisma } from "./generated/prisma/index.js";
import resumeWebsiteRouter from "./routes/resumeWebsiteRouter.js";



const app = express();

//needed for railway
app.set('trust proxy', 1);

dotenv.config();


console.log(process.env.FRONTEND_URL);
const corsOptions = {
  origin: process.env.FRONTEND_URL, //youll need to update this when you host your website
  optionsSuccessStatus: 200,
  credentials: true,
};


app.use(cors(corsOptions));




// JSON parsing middleware
app.use(express.json());

app.use("/",resumeWebsiteRouter);

// Start the session
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
