import dotenv from "dotenv";
import { PrismaClient } from "../generated/prisma/index.js";

dotenv.config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export const getProjects = async (req, res, next) => {
  try {
    const projects = await prisma.projects.findMany();
    return res.status(200).json({projects});
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({
        msg: "something went wrong while fetching projects",
        error: err.message,
      });
  }
};
