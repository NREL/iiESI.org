// ----- KEEP THIS SCRIPT ----
// bootstrap-carousel.html

$(document).ready(function() {
 
$('#myCarousel').carousel({
interval: 9000
});
 
$('#carousel-text').html($('#slide-content-0').html());
 
// When the carousel slides, auto update the text
$('#myCarousel').on('slid.bs.carousel', function (e) {
var id = $('.item.active').data('slide-number');
$('#carousel-text').html($('#slide-content-'+id).html());
});


$("#myCarousel").swipe({
		swipeLeft: function (event, direction, distance, duration, fingerCount) {
			$('.carousel-control.left').click();
		},
		swipeRight: function (event, direction, distance, duration, fingerCount) {
			$('.carousel-control.right').click();
		},
		threshold: 0
	});       


});