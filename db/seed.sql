use cardealer;
insert into department(department_name)
values
    ("Sales"),
    ("Service"),
    ("Administration");

insert into role(job_title,department_name,role_id,salary)
values 
    ("Salesperson","Sales",010,67754),
    ("Service Advisor","Service",020,50821),
    ("Receptionist","Administration",030,45000),
    ("Accounting","Administration",030,60000),
    ("Apprentice","Service",020,30000),
    ("Finance Advisor","Sales",010,80000),
    ("Technician","Service",020,55000),
    ("Parts Attendent","Service",020,50821);

insert into employee(last_name,first_name,employee_id,manager,job,department_name,salary)
values
	("Smith","Paul",13,"Adele","Accounting","Administration",60000),
    ("Taylor","Tara",12,"Jerry","Service Advisor","Service",50821),
    ("Ellenson","Brandon",11,"Warren","Salesperson","Sales",67754),
    ("Curry","Carol",23,"Adele","Receptionist","Administration",45000),
    ("Fernandez","Shaun",22,"Jerry","Parts Attendent","Service",50821),
    ("Peter","John",21,"Warren","Finance Advisor","Sales",80000),
	("Kelly","Pam",33,"Adele","Receptionist","Administration",45000),
    ("Miller","Brandy",32,"Jerry","Technician","Service",55000),
    ("Scott","Michael",31,"Warren","Salesperson","Sales",67754);