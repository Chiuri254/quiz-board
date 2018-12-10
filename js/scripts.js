//BACK-END LOGIC
var score = 0; //set score to 0
var total = 6; //Total number of questions
var point = 20; //Points per correct answer
var highest = total * point;
// initialiser
function init() {
    //set correct answers 
    sessionStorage.setItem('a1', 'c');
    sessionStorage.setItem('a2', 'a');
    sessionStorage.setItem('a3', 'd');
    sessionStorage.setItem('a4', 'b');
    sessionStorage.setItem('a5', 'a');
    sessionStorage.setItem('a6', 'd');
}
//FRONT-END LOGIC
$(document).ready(function () {

    $('.questionForm').hide(); // hide all questions

    $('#q1').show(); //show first question

    $('#q1 #submit').click(function () {
        $('.questionForm').hide(); // hide all question
        process('q1'); //process question 1
        $('#q2').fadeIn(400); //show next question
        return false;

    });
    $('#q2 #submit').click(function () {
        $('.questionForm').hide();
        process('q2');
        $('#q3').fadeIn(400);
        return false;

    });
    $('#q3 #submit').click(function () {
        $('.questionForm').hide();
        process('q3');
        $('#q4').fadeIn(400);
        return false;

    });
    $('#q4 #submit').click(function () {
        $('.questionForm').hide();
        process('q4');
        $('#q5').fadeIn(400);
        return false;

    });
    $('#q5 #submit').click(function () {
        $('.questionForm').hide();
        process('q5');
        $('#q6').fadeIn(400);
        return false;

    });
    $('#q6 #submit').click(function () {
        $('.questionForm').hide();
        process('q6');
        $('#results').fadeIn(400);
        return false;

    });
});
//process the answers
function process(q) {
    if (q == "q1") {
        var submitted = $('input[name=q1]:checked').val();
        if (submitted == sessionStorage.a1) {
            score++; // score incremented by one if correct
        }
    }
    if (q == "q2") {
        var submitted = $('input[name=q2]:checked').val();
        if (submitted == sessionStorage.a2) {
            score++;
        }
    }
    if (q == "q3") {
        var submitted = $('input[name=q3]:checked').val();
        if (submitted == sessionStorage.a3) {
            score++;
        }
    }
    if (q == "q4") {
        var submitted = $('input[name=q4]:checked').val();
        if (submitted == sessionStorage.a4) {
            score++;
        }
    }
    if (q == "q5") {
        var submitted = $('input[name=q5]:checked').val();
        if (submitted == sessionStorage.a5) {
            score++;
        }

    }
    if (q == "q6") {
        var submitted = $('input[name=q6]:checked').val();
        if (submitted == sessionStorage.a6) {
            score++;
        }
        $('#results').html('<h3>Your final score is: ' + score + ' out of 6</h3><a href="index.html">Take Quiz Again</a>');
    }
    return false;
}

// Add event listener
window.addEventListener('load', init, false);