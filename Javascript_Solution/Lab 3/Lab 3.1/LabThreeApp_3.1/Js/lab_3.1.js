// My application namespace
var LAB3 = LAB3 || {};

// To hold persons data
LAB3.persons = [
    {
        'firstName': 'Emil',
        'lastName': 'Svensson',
        'age': '6'
    },
    {
        'firstName': 'Pippi',
        'lastName': 'Långstrump',
        'age': '10'
    },
    {
        'firstName': 'Ronja',
        'lastName': 'Rövardotter',
        'age': '12'
    }
];

LAB3.showNames = function () {
    // Get output container from UI
    var outputContainer = document.getElementById('TextOutput');

    for (let person of LAB3.persons) {
        // create <label> node to hold first name and last name
        let label = document.createElement('label');
        let labelledText = document.createTextNode(person.firstName + ' ' + person.lastName + ' ' + person.age);
        // <br> to move cursor in new line
        let br = document.createElement('br');
        // Add text in label
        label.appendChild(labelledText);
        // Add label in container div
        outputContainer.appendChild(label);
        // Add <br> to put next in new line
        outputContainer.appendChild(br);
    }
}
