var MYAPPLICATION = MYAPPLICATION || {};

MYAPPLICATION.NameOrNumber = ["Superman", "Batman", "Flash", "Cyborg", 52, 66, 23, 97]
MYAPPLICATION.DisplayNameOrNumber = function () {
    var content = document.getElementById('content');
    var ul = document.createElement('ul');
    MYAPPLICATION.NameOrNumber.forEach(function (item) {
        if (typeof item == 'string') {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(item));
            ul.appendChild(li);
        }
    });
    content.innerHTML = '';
    content.appendChild(ul);

    /*------------------------------------------ */
    var error = document.getElementById('error');
    var ul = document.createElement('ul');
    MYAPPLICATION.NameOrNumber.forEach(function (item) {
        if (typeof item == 'number') {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(item));
            ul.appendChild(li);
        }
    });
    error.innerHTML = 'Siffor hittades i Arrayn!';
    error.appendChild(ul);
    document.getElementById('error').style.display = 'block';
}