// Namespace for my application
var LAB3 = LAB3 || {};

// Array having persons data
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

// Array having persons data
LAB3.persons1 = [
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

// Run the code when document is loaded
$(document).ready(function(){
    // To hold data with <li> tag upto looping is complete.
    var data='';
    // Loop through array, callback function with index and value of array
    $.each(LAB3.persons, function(index, value){
        data = data + "<li id='"+index+"'>"+value.firstName+' '+value.lastName+"</li>";
    });

    // Add data into <UL> which has id as TextOutput
    $("#TextOutput").html(data);

    // To make second <li> having blue background. Add blue class.
    $("#TextOutput li[id='1']").attr('class', 'blue');
  

    // To hold data with <li> tag upto looping is complete for second array.
    var data1='';
    // Loop through array, callback function with index and value of array
    $.each(LAB3.persons1, function(index, value){
        data1 = data1 + "<li id='"+index+"'>"+value.firstName+' '+value.lastName+"</li>";
    });

    // Add data into <UL> which has id as TextOutput1
    $("#TextOutput1").html(data1);

    // To make second <li> having blue background. Add blue class.
    $("#TextOutput1 li[id='1']").attr('class', 'blue');


    // On click of fadeIn button, data will fade in
    $("#fadeIn").click(function(){
        // For first array
        var fadeAt = 1000;
        // For second array
        var fadeAt1 = 1000;
        // Get all <li> one by one using Loop for first array
        $("#TextOutput li").each(function(){
            // first <li> will have 1000 mili seconds to fade in
            // second <li> will have 2000 mili seconds to fade in
            // third <li> will have 3000 mili seconds to fade in
            $(this).fadeIn(fadeAt);
            fadeAt = fadeAt + 1000;
        });

        // Get all <li> one by one using Loop for second array
        $("#TextOutput1 li").each(function(){
            // first <li> will have 1000 mili seconds to fade in
            // second <li> will have 2000 mili seconds to fade in
            // third <li> will have 3000 mili seconds to fade in
            $(this).fadeIn(fadeAt1);
            fadeAt1 = fadeAt1 + 1000;
        });
    });

    // On click of fadeIn button, data will fade out
    $("#fadeOut").click(function(){
        // For first array
        var fadeAt = 1000;
        // For second array
        var fadeAt1 = 1000;
        // Get all <li> one by one using Loop for first array
        $("#TextOutput li").each(function(){
            // first <li> will have 1000 mili seconds to fade in
            // second <li> will have 2000 mili seconds to fade in
            // third <li> will have 3000 mili seconds to fade in
            $(this).fadeOut(fadeAt);
            fadeAt = fadeAt + 1000;
        });

        // Get all <li> one by one using Loop for second array
        $("#TextOutput1 li").each(function(){
            // first <li> will have 1000 mili seconds to fade out
            // second <li> will have 2000 mili seconds to fade out
            // third <li> will have 3000 mili seconds to fade out
            $(this).fadeOut(fadeAt1);
            fadeAt1 = fadeAt1 + 1000;
        });
    });

});