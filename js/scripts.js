//BACK-END LOGIC
var score = 0; //set score to 0
var total = 6; //Total number of questions
var point = 20; //Points per correct answer
var highest = total * point;
// initialiser
function init() {
    //set correct answers 
    sessionStorage.setItem('a1','c');
    sessionStorage.setItem('a2','a');
    sessionStorage.setItem('a3','d');
    sessionStorage.setItem('a4','b');
    sessionStorage.setItem('a5','a');
    sessionStorage.setItem('a6','d');
}
//FRONT-END LOGIC
$(document).ready(function () {

    $('.questionForm').hide(); // hide all questions

    $('#q1').show(); //show first question

    $('.questionForm #submit').click(function () {
        // Get data attribute
        current = $(this).parents('form:first').data('question');
        next = $(this).parents('form:first').data('question') + 1;
        //Hide all questions
        $('.questionForm').hide();
        //show next question
        $('#q' + next + '').fadeIn(400);
        process('' + current + '');
        return false;
    });
});
//process the answers
function process(n) {
    //Get input value
    var submitted = $('input[name=q' + n + ']:checked').val();
    if (submitted == sessionStorage.getItem('a' + n + '')) {
        score = score + point;
    }
    if (n == total) {
        $('#results').html('<h3>Your final score is: ' + score + ' out of ' + highest + '</h3><a href="index.html">Take Quiz Again</a>');
    }
    return false;
}
// Add event listener
window.addEventListener('load', init, false);