var score = 0;
var total = 6;
var point = 1;
var highest = total * points;

//Initializer
function init() {
	//set correct answers
	sessionStorage.setItem('a1','c');
	sessionStorage.setItem('a2','b');
	sessionStorage.setItem('a3','b');
	sessionStorage.setItem('a4','b');
	sessionStorage.setItem('a5','b');
	sessionStorage.setItem('a6','b');
}
$(document).ready(function () {
	//Hide all questions
	$('.questionForm').hide();

	//show first question
	$('#q1').show();
	$('.questionForm #submit').click(function () {
		//Get data attribute
		current = $(this).parents('form:first').data('question');
		next = $(this).parents('form:first').data('question') + 1;
		//Hide a question
		$('.questionForm').hide();
		//show next question
		$('#q' + next + '').fadeIn(600);
		process('' + current + '');
		return false;
	})

});
//process the answers
function process(n) {
	//Get input value
	var submitted = $('input[name=q' + n + '];checked').val();
	if (submitted == sessionStorage.getItem('a' + n + '')) {
		score = score + point;

	}

if (n == total) {

		$('#results').html('<h3> Your final score is:' +score+ ' out of 6</h3><a href="index.html">Take Quiz Again</a>');
	}
	return false;
}
// Add event listener
window.addEventListener('load', init, false);