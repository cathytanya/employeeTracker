// the dependencies needed for the application
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
// const { Action } = require("rxjs/internal/scheduler/Action");
// const { prompt } = require("inquirer");
// connecting to database
const connection = mysql.createConnection({
    host:"localhost",
    // port number 
    port:3001,
    // username/password on my personal server (SQL)
    user:"root",
    password:"Wildcats22",
    // name of database used for the applicaton from SQL
    database:"company_db"
})
// sql server and sql database
connection.connect(err =>{
    if (err) throw err;
    options();
})

// prompts the user will choose from 
function options() {
    inquirer.prompt({
        name: "action",
        type:"list",
        message: "Welcome to our employee database. What would you like to do?",
        // these are options which the user will choose from the database
        choices:
        ["View all Departments",
        "View all Roles",
        "View all Employees",
        "Add Departments",
        "Add Roles",
        "Add Employees",
        "Update Employees",
        "Delete Employee",
        "Exit"]
    }).then (nextStep =>{
        switch (nextStep.action){
            case "View all Departments":
                viewAllDepartments();
            break;
            case "View all Roles":
                viewAllRoles();
            break;
            case "View all Employees":
                viewAllEmployees();
            break;
            case "Add Departments":
                addDepartments();
            break;
            case  "Add Roles":
                addRoles();
            break;
            case "Add Employees":
                addEmployees();
            break;
            case "Update Employees":
                updateEmployees();
            break;
            case "Delete Employee":
                deleteEmployees();
            break;
            case "Exit":
                exit();
            break;
            default:
                break;
        }
    })
};
// all the departments in database
function viewAllDepartments(){
    const query = 'SELECT * FROM department';
    connection.query(query, function(err,res){
        if (err) throw err;
        console.table('All Department', res);
        options();
    })
};