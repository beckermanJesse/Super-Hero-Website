//comment variables

var a = ["I'm not sure i'd want to be saved by you...", "Are you sure this isn't copyrighted?", "Really? You want to be this superhero? Interesting..."];

// function for initial set up
function init() {
    $('.scene').hide();
    $('.results').hide();
    $('.panel').show();
    $('.esc').hide();
}


//clear input function
function clearInput() {
    $('#inp').val('');
    $('#inp2').val('');
    $('#inp3').val('');
    $('#inp4').val('');
    $('.message').text('');
    textinput1 = '';
    textinput2 = '';
    textinput3 = '';
    textinput4 = '';
}

//random comment pull
function getRandom() {
    var r = Math.floor(Math.random() * a.length);
    $('.comment').text(a[r]);
}


// call function to do initial set up 
init();
clearInput();
getRandom();
// generic event handler for any button
$('.start').click(function () {
    // check if this is the last panel
    // if so, go to the first scene
    // else, go to the next scene
    if ($(this).parent().is($('.panel').last())) {
        $(this).parent().hide();
        $('.scene').first().show();
    } else {
        $(this).parent().hide();
        $(this).parent().next().show();
    }
    // show the escape button
    $('.esc').show();
});



// when the escape button is clicked
// show the home page and hide the rest
// these actions are exectuted via the init() function
$('.esc').click(function () {
    init();
});

// when text is entered into an input box
// store the text inside a variable and then
// display this content in a message box
// at the end of the program, in the "results" page
$('#inp, #inp2, #inp3, #inp4').change(function () {
    textinput1 = $('#inp').val();
    textinput2 = $('#inp2').val();
    textinput3 = $('#inp3').val();
    textinput4 = $('#inp4').val();

    $('.message').text('So you are a ' + textinput1 + ' superhero whos powers are ' + textinput2 + ' and ' + textinput3 + ' that lives in ' + textinput4 + ' ?');
});

// reloads comment variable

$('#restart, .esc').click(function () {
    getRandom();
});

$('#restart, .esc').click(function () {
    clearInput();
});