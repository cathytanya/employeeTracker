drop database if exists cardealer;
-- create the database
create database cardealer;
-- use the database
use cardealer;
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
    department_name varchar(30) not null,
    role_id int,
    salary decimal not null,
	primary key(id)
);
-- created a table for the employee info
create TABLE employee(
    id INT auto_increment NOT NULL,
    employee_id int not null,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    job varchar(30) not null,
    department_name varchar(30) not null,
    salary decimal not null,
    manager varchar(30) not null,
	primary key(id)
);