var score = 0; //set score to 0
var total = 6; //Total number of questions
var point = 1; //Points per correct answer
var highest =total * point ;
// initialiser
function init(){
    //set correct answers 
    sessionStorage.setItem('a1','c');
    sessionStorage.setItem('a2','c');
    sessionStorage.setItem('a3','c');
    sessionStorage.setItem('a4','c');
    sessionStorage.setItem('a5','c');
    sessionStorage.setItem('a6','c');
}

$(document).ready(function(){
    // hide all questions
    $('.questionForm').hide();
    //show first question
    $('#q1').show();

    $('#q1 #submit').click(function(){
        $('.questionForm').hide();
        $('#q2').fadeIn(600);
        return false;

    });
    $('#q2 #submit').click(function(){
        $('.questionForm').hide();
        $('#q3').fadeIn(600);
        return false;

    });
    $('#q3 #submit').click(function(){
        $('.questionForm').hide();
        $('#q4').fadeIn(600);
        return false;

    });
    $('#q4 #submit').click(function(){
        $('.questionForm').hide();
        $('#q5').fadeIn(600);
        return false;

    });
    $('#q5 #submit').click(function(){
        $('.questionForm').hide();
        $('#q6').fadeIn(600);
        return false;

    });
    $('#q6 #submit').click(function(){
        $('.questionForm').hide();
        $('#results').fadeIn(600);
        return false;

    });
});
// Add event listener
window.addEventListener('load');
window.addEventListener('init');
window.addEventListener('false');

