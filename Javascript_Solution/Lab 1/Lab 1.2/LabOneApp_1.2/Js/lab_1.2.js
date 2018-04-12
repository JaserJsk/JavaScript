var MYAPPLICATION = MYAPPLICATION || {};

MYAPPLICATION.ToogleHidden = function () {
    var x = document.getElementById('form1');
    var y = document.getElementById('info');

    if (x.style.display === 'block') {
        x.style.display = 'none';
    }
    else {
        x.style.display = 'block';
    }


    if (y.style.display === 'none') {
        y.style.display = 'block';
    }
    else {
        y.style.display = 'none';
    }

}