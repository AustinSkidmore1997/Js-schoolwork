// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.getElementById('add-employees-btn');
const firstName = []
const lastName = [];
// Collect employee data
const collectEmployees = function() {
    const employees = [];
    for (let i = 0; i < 3; i++) {
        const firstName = window.prompt("Enter first name for employee " + (i+1));
        const lastName = window.prompt("Enter last name for employee " + (i+1));
        const salary = parseFloat(window.prompt("Enter salary for employee " + (i+1)));
        employees.push({ firstName, lastName, salary });
    }
    return employees;
}
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  

}
// Select a random employee
const getRandomEmployee = function(employeesArray) {
    // Generate a random index within the employeesArray length
    return employeesArray[Math.floor(Math.random() * employeesArray.length)];
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/
// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
    // Get the employee table
    const employeeTable = document.getElementById('employee-table');
    // Clear the employee table
    employeeTable.innerHTML = '';
    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
        const currentEmployee = employeesArray[i];
        const newTableRow = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = currentEmployee.firstName;
        newTableRow.append(firstNameCell);
        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = currentEmployee.lastName;
        newTableRow.append(lastNameCell);
        const salaryCell = document.createElement("td");
        // Format the salary as currency
        salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
        newTableRow.append(salaryCell);
        employeeTable.append(newTableRow);
    }
}
const trackEmployeeData = function() {
    const employees = collectEmployees();
    console.table(employees);
    displayAverageSalary(employees);
    console.log('==============================');
    getRandomEmployee(employees);
    employees.sort(function(a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        } else {
            return 1;
        }
    });
    displayEmployees(employees);
}
// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);