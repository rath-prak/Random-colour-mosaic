$(document).ready(function () {
	

		function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};

	$(".box").on("click", function () {
		$(".box").css('background', randomColor());
	});

	$(".box2").on("click", function () {
		$(".box2").css('background', randomColor());
		});

	$(".box3").on("click", function () {
		$(".box3").css('background', randomColor());
		});

	$(".box4").on("click", function () {
		$(".box4").css('background', randomColor());
	});

	$(".box5").on("click", function () {
		$(".box5").css('background', randomColor());
		});

	$(".box6").on("click", function () {
		$(".box6").css('background', randomColor());
		});

	$(".box7").on("click", function () {
		$(".box7").css('background', randomColor());
	});

	$(".box8").on("click", function () {
		$(".box8").css('background', randomColor());
		});

	$(".box9").on("click", function () {
		$(".box9").css('background', randomColor());
		});

});


	