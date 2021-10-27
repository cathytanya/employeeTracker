use company_db;
insert into department(department_name)
values
    ("Sales"),
    ("Service"),
    ("Administration");
insert into role(job_title,department_id,salary)
values 
    ("Salesperson",1,67754),
    ("Service Advisor",2,50821),
    ("Receptionist",3,45000),
    ("Accounting",3,60000),
    ("Finance Advisor",1,80000),
    ("Technician",2,55000),
    ("Parts Attendent",2,50821);
insert into employee(last_name,first_name,role_id,manager_id)
values
	("Smith","Paul",13,003),
    ("Taylor","Tara",12,002),
    ("Ellenson","Brandon",11,001),
    ("Curry","Carol",23,003),
    ("Fernandez","Shaun",22,002),
    ("Peter","John",21,001),
	("Kelly","Pam",33,003),
    ("Miller","Brandy",32,002),
    ("Scott","Michael",31,001);
    
