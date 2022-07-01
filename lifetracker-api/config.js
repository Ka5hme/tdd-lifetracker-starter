require("dotenv").config();
require("colors");

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

const SECRET_KEY = process.env.SECRET_KEY || "secret_dev"
const BCRYPT_WORK_FACTOR = 13
const IS_TESTING = process.env.DATABASE_TEST_NAME

function getDatabaseUri() {
  const dbUser = process.env.DATABASE_USER || "postgres"
  const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : "postgres"
  const dbHost = process.env.DATABASE_HOST || "localhost"
  const dbPort = process.env.DATABASE_PORT || 5432
  const dbName = process.env.DATABASE_NAME || "lifetracker"
  
  return (process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`);
}

 console.log("Vaccine Registration Config".green);
 console.log("PORT:".blue, PORT);
 console.log("Database URI:".blue, getDatabaseUri());
 console.log("---");

module.exports = {
  SECRET_KEY,
  PORT,
  getDatabaseUri,
  BCRYPT_WORK_FACTOR,
  IS_TESTING,

}
