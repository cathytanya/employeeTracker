-- create the database
create database company_db;
-- use the database
use company_db;
-- created table for department info
create TABLE department(
    id INT auto_increment NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    primary key(id)
);
-- created a table for the roles info
create TABLE role(
    id INT auto_increment NOT NULL,
    job_title varchar(30) not null,
    department_id int,
    salary decimal (10,0) not null,
	primary key(id)
);
-- created a table for the employee info
create TABLE employee(
    id INT auto_increment NOT NULL,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int,
    manager_id int,
	primary key(id)
);