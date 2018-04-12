// My application namespace
var LAB4 = LAB4 || {};

// To hold employees data
LAB4.employees = [
    {
        'firstName': 'Roy',
        'lastName': 'Palmer'
    },
    {
        'firstName': 'Oliver',
        'lastName': 'Queen'
    },
    {
        'firstName': 'Barry',
        'lastName': 'Allen'
    }
];

// To hold cars data
LAB4.cars = [
    {
        'name': 'HONDA NSX'
    },
    {
        'name': 'CORVETTE Z06'
    },
    {
        'name': 'MCLAREN 540C'
    }
];


LAB4.showEmployees = function () {
    // Get output container from UI
    let EmployeesContainer = document.getElementById('EmployeesContainer');

    for (let employee of LAB4.employees) {
        // create <label> node to hold first name and last name
        let label = document.createElement('label');
        let labelledText = document.createTextNode(employee.firstName + ' ' + employee.lastName);
        // <br> to move cursor in new line
        let br = document.createElement('br');
        // Add text in label
        label.appendChild(labelledText);
        // Add label in container div
        EmployeesContainer.appendChild(label);
        // Add <br> to put next in new line
        EmployeesContainer.appendChild(br);
    }
}

LAB4.showCars = function () {
    // Get output container from UI
    var CarsContainer = document.getElementById('CarsContainer');

    for (let car of LAB4.cars) {
        // create <label> node to hold first name and last name
        let label = document.createElement('label');
        let labelledText = document.createTextNode(car.name + ' ' + car.price);
        // <br> to move cursor in new line
        let br = document.createElement('br');
        // Add text in label
        label.appendChild(labelledText);
        // Add label in container div
        CarsContainer.appendChild(label);
        // Add <br> to put next in new line
        CarsContainer.appendChild(br);
    }
}
