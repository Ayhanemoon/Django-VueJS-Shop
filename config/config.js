require('dotenv').config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "icc_aria_dev",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "icc_aria_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "icc_aria_prod",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};