$(document).ready(function(){
    // hide all questions
    $('.questionForm').hide();
    //show first question
    $('#q1').show();

    $('#q1 #submit').click(function(){
        $('.questionForm').hide();
        $('#q2').fadeIn(300);
        return false;

    });
});
