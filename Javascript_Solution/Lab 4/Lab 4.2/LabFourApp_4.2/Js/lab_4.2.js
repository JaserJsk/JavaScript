// My application namespace
var LAB4 = LAB4 || {};

// To hold employees data
LAB4.employees = [
    {
        'firstName': 'Roy',
        'lastName': 'Palmer',
        'haveCar': true
    },
    {
        'firstName': 'Oliver',
        'lastName': 'Queen',
        'haveCar': false
    },
    {
        'firstName': 'Barry',
        'lastName': 'Allen',
        'haveCar': true
    }
];

// To hold cars data
LAB4.cars = [
    {
        'name': 'HONDA NSX',
        'price': 23.99,
        'color': 'Black'
    },
    {
        'name': 'CORVETTE Z06',
        'price': 4.57,
        'color': 'Red'
    },
    {
        'name': 'MCLAREN 540C',
        'price': 5.85,
        'color': 'White'
    }
];


// Promise to check if employee owns a car
LAB4.checkIsOwnCar = new Promise(
    function (resolve, reject) {
        // To collect employees who have a car
        let employeesOwnCar = [];
        // check if he has a car
        for (let employee of LAB4.employees) {
            // collect if he has
            if (employee.haveCar) {
                employeesOwnCar.push(employee);
            }
        }

        // If one or more employee owns a car then resolve
        if (employeesOwnCar.length > 0) {
            resolve(employeesOwnCar);
        } else {
            // if no employee owns a car then reject
            let reason = new Error('No employee owns a car');
            reject(reason); // reject
        }
    }
);

LAB4.showEmployees = function () {
    // Get output container from UI
    let EmployeesContainer = document.getElementById('EmployeesContainer');

    LAB4.checkIsOwnCar.then((employees) => {

            for (let employee of employees) {
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
        })
        .catch(function (error) {
            // oops, error occured
            console.log(error.message);
            let msg = '<label>' + error.message + '</label>'
            // Show error msg when no employee owns a car
            let errorContainer = document.getElementById('errorMSG');
            errorContainer.innerHTML = msg;
        });
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
