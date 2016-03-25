$(document).ready(function() {
	$('.ryu').mouseenter(function() {
	$('.ryu-still').hide();
	$('.ryu-ready').show();
})
	
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
			);
		//animate hadouken to the right of screen
	})

	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	$(document).keydown(function(e) {
        
        if (e.which == 88)
            changePose('cool');

        })
    });

    $(document).keyup(function(e) {
        if (e.which == 88) {
            changePose('still');
        }
    });


function changePose(stance) {

    if (stance === 'cool') {
        $('.ryu-ready').hide();
        $('.ryu-cool').show();

    } else {

        $('.ryu-ready').show();
        $('.ryu-cool').hide();

    }
}

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
