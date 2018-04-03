$(document).ready(function(){


$(window).scroll(function(){
	if ($(document).scrollTop() > 50) {
		$('.my-navbar').addClass('shrink');
	}
	else {
		$('my-navbar').removeClass('shrink');
		}
	});
});

$("#pop").on("click", function() {
   $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
   $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});