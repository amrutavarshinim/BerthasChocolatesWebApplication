$(document).ready(function(){
$('.tablinks').click(function() {
    $(this).toggleClass('active');
});

$("#dosomething").on('click', function(){
	alert('Hello');
})
});