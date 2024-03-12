// define the migration file for creating automatic table creations

// import the npm packages
import mysql2 from "mysql2"; // don't import "mysql/promise"
import migration from "mysql-migrations";
import path from "path";

// define the config method for environment variables
import dotenv from "dotenv";
dotenv.config();

const __dirname = path.resolve();

const connection = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

migration.init(connection, __dirname + "/src/backend/migrations", function () {
  console.log("finished running migrations");
});

// run -> node migration.mjs up
// run -> node migration.mjs down
