-- Opgave 1 --
SELECT first_name "First Name",  last_name "Last Name" 
FROM employees;

-- Opgave 2 --
Select distinct department_id "DepartmentID"
FROM employees;

-- Opgave 3 -- 
Select *
From employees
Order by first_name desc;

-- Opgave 4 -- 
Select first_name "FirstName", last_Name "LastName", salary "Salary", salary*.15 PF
From employees

-- Opgave 5 --
Select employee_ID "EmployeeID", first_name "FirstName", last_Name "LastName", salary "Salary"
From employees
Order by salary asc;

-- Opgave 6 -- 
Select SUM(Salary)
From employees;
Order by salary asc;

-- Opgave 7 -- 
Select max(salary), min(salary)
From employees;

-- Opgave 8 -- 
Select avg(salary), count(employee_id)
From employees;

-- Opgave 9 -- 


-- Opgave 10 -- 
Select count(job_id)
From employees;
-- Opgave 11 -- 
