import path from "path";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DATABASE_URI);
