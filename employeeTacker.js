// the dependencies needed for the application
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
// connecting to database
const connection = mysql.createConnection({
    host:"localhost",
    // port number 
    port:3306,
    // username/password on my personal server (SQL)
    user:"root",
    password:"Wildcats22",
    // name of database used for the applicaton from SQL
    database:"cardealer"
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
            default:
                break;
        }
    })
};
// when the user chooses to see all the departments in database
function viewAllDepartments(){
    // select from theh department table 
    const query = 'SELECT * FROM department';
    connection.query(query, (err,res) =>{
        if (err) throw err;
        console.table('All Departments', res);
        options();
    })
};
// when the user chooses to see all the roles in database
function viewAllRoles(){
    // select from the role table
    const query = 'SELECT * FROM role';
    connection.query(query, (err,res)=>{
        if (err) throw err;
        console.table('All Roles', res);
        options();
    })
};
// when the user chooses to see all the employees in database
function viewAllEmployees(){
    // select from the employee table
    const query = 'SELECT * FROM employee';
    connection.query(query, (err,res)=>{
        if (err) throw err;
        console.table('All Employees', res);
        options();
    })
};
// add a department to the database
function addDepartments(){
    // prompt user to enter the new department name
    inquirer.prompt([
        {
            name:"newDepartment",
            type: 'input',
            message: 'Enter New Department:'
        }     
    ]).then(newStep =>{
        // inserting the new department name
        connection.query(
            `INSERT INTO department (department_name) VALUES ('${newStep.newDepartment}');`,
            {
                department_name: newStep.newDepartment
            });
        const query = 'SELECT * FROM department'
        connection.query(query, (err,res)=>{
            if (err) throw err;
            console.table('All Employees', res);
            options();
        });        
    });
};
// add a roles to the database
function addRoles(){
    // prompt user to enter the info needed for the roles added
    inquirer.prompt([
        {
            name:"newRole",
            type: 'input',
            message: 'Enter Position:'
        }, 
        {
            name:"salary",
            type: 'input',
            message: 'Enter Salary:'
        },
        {
            name:"departmentName",
            type: 'input',
            message: 'Enter Department Name:'
        },
        {
            name:"roleID",
            type: 'input',
            message: 'Enter Role ID:'
        }
    ]).then(newStep =>{
        // inserting the new role info
        connection.query(
            `INSERT INTO role (job_title,department_name,role_id,salary) VALUES (
            '${newStep.newRole}',
            '${newStep.departmentName}',
            '${newStep.roleID}',
            '${newStep.salary}');`,
            {
                job_title: newStep.newRole,
                department_name: newStep.departmentName,
                role_id: newStep.roleID,
                salary: newStep.salary

            });
        const query = 'SELECT * FROM role'
        connection.query(query, (err,res)=>{
            if (err) throw err;
            console.table('All Roles', res);
            options();
        });        
    });
};
// add a employee to the database
function addEmployees(){
    // prompt user to enter the info needed for the employees added
    inquirer.prompt([
        {
            name:"lastName",
            type: 'input',
            message: 'Enter Last Name:'
        }, 
        {
            name:"firstName",
            type: 'input',
            message: 'Enter First Name:'
        }, 
        {
            name:"salary",
            type: 'input',
            message: 'Enter Salary:'
        },
        {
            name:"departmentName",
            type: 'input',
            message: 'Enter Department Name:'
        },
        {
            name:"employeeID",
            type: 'input',
            message: 'Enter Employee ID:'
        },
        {
            name:"job_title",
            type: 'input',
            message: 'Enter Position:'
        },
        {
            name:"manager",
            type: 'input',
            message: 'Enter Manager Name:'
        }
    ]).then(newStep =>{
        // inserting the new employee info
        connection.query(
            `INSERT INTO employee (employee_id,first_name,last_name,job,department_name,salary,manager) VALUES (
                '${newStep.employeeID}',
                '${newStep.firstName}',
                '${newStep.lastName}',
                '${newStep.job_title}',
                '${newStep.departmentName}',
                '${newStep.salary}',
                '${newStep.manager}');`,
            {
                employee_id: newStep.employeeID,
                first_name: newStep.firstName,
                last_name: newStep.lastName,
                job: newStep.job_title,
                department_name: newStep.departmentName,
                salary: newStep.salary,
                manager: newStep.manager
            });
        const query = 'SELECT * FROM employee'
        connection.query(query, (err,res)=>{
            if (err) throw err;
            console.table('All Employee', res);
            options();
        });        
    });
};
// update an employee to the database
function updateEmployees(){
    const query = 'SELECT employee_id FROM employee';
    connection.query(query, (err,res) =>{
        if (err) throw err;
        inquirer.prompt([
        {
            name:"employeeID",
            type: 'list',
            choices:()=>res.map(res=> res.job),
            message: 'Select Employee ID:'
        }
    ])})
    .then(newStep =>{
        // update the employee job
        connection.query(
            `UPDATE employee SET job=${newStep.job_title} WHERE employee_id= ${newStep.employeeID};`,
            {
                job: newStep.job_title,
            });
        const query = 'SELECT * FROM employee'
        connection.query(query, (err,res)=>{
            if (err) throw err;
            console.table('Updated Employees', res);
            options();
        });        
    });
};