// the dependencies needed for the application
const sql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table")
// connecting to database
const link = mysql.createConnection({
    host:"localhost",
    // port number 
    port:3001,
    // username/password on my personal server (SQL)
    user:"root",
    password:"Wildcats22",
    // name of database used for the applicaton from SQL
    database:"company_db"
})

