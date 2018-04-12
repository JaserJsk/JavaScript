window.onload = function ()
{
    var myInput = document.getElementById("gropInput"),
        myAnvandare = document.getElementById("user").focus(),
        myForname = document.getElementById("fName"),
        myEfternamn = document.getElementById("lName"),
        myTelnu = document.getElementById("tel"),
        myStad = document.getElementById("stad"),
        myAge = document.getElementById("age"),
        myFDiv = document.getElementById("divFel"),
        myTextarea = document.getElementById("show"),
        myButton = document.getElementById("button");

    myFDiv.style.visibility = "hidden";
    myTextarea.style.visibility = "hidden";

    var itemForm = document.forms[0];
    myButton.onclick = function () {
        if (!myAge.value.match(/[a-zA-Z]+/) && myAge.value >= 10 && myAge.value < 100) {
            myTextarea.style.visibility = "visible";
            setTimeout(function () {
                myTextarea.style.visibility = "hidden";
            }, 5000);
            myTextarea.style.backgroundColor = "#42A5F5";
            var i;
            for (i = 0; i < itemForm.length; i = i + 1) {
                if (itemForm[i].getAttribute("placeholder") != null) {
                    myTextarea.innerHTML += itemForm[i].getAttribute("placeholder") + ": " + itemForm[i].value + "\n";
                }
            }
        } else {
            myFDiv.style.backgroundColor = "red";
            myFDiv.style.visibility = "visible";
            myFDiv.style.fontSize = "22px";
            myFDiv.innerHTML = "Ange ålder mellan 10-100";
            setTimeout(function () {
                myFDiv.style.visibility = "hidden";
            }, 5000);
        }
    }

    var p = [
        {
            user: "Mich",
            fName: "Micheal",
            lNamn: "Sandin",
            tel: "01234567890",
            stad: "Thailand",
            age: 25
        },
        {
            user: "Pet",
            fName: "Peter",
            lNamn: "Stormare",
            tel: "01234567890",
            stad: "New York",
            age: 41
        },
        {
            user: "X-Solider",
            fName: "Cloud",
            lNamn: "Strife",
            tel: "01234567890",
            stad: "Midgar",
            age: 40
        }
    ];

    document.getElementById("buttonAdd").onclick = function ()
    {
        "use strict";

        var userTarg = itemForm.firstElementChild.firstElementChild.value;
        for (var i in p)
        {
            if (p.hasOwnProperty(i)) {
                if (userTarg === p[i].user) {
                    var re = p[i];
                    myForname.value = re.fName;
                    myEfternamn.value = re.lNamn;
                    myTelnu.value = re.tel;
                    myStad.value = re.stad;
                    myAge.value = re.age;
                }

                else {
                    myFDiv.style.visibility = "visible";
                    myFDiv.innerHTML = "Användaren hittas ej";
                    setTimeout(function () {
                        myFDiv.style.visibility = "hidden";
                    }, 5000);
                }

            }
        }

    }

};