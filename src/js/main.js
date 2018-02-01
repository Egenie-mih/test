svg4everybody();
$(document).foundation();

// @include('detect.js')
// @include('globals.js')

$(document).ready(() => {
	let $arrow = $('.javascript-skills__arrow');
	let $counter = $('.javascript-skills__count');
	let $percentValue = $('.javascript-skills__count').data('percentage');

	if ($percentValue >= 0 && $percentValue <= 100) {
		let positionValue = 0;
		let degreesResult = 0;
		let counterValue = 0;
		let animateFunc = setInterval(() => {
			if (positionValue < $percentValue) {
				++positionValue;
				degreesResult = positionValue * 1.8;
				counterValue = Math.round(positionValue * 10.5);
				$counter.text(counterValue);
				$arrow.css({transform: `rotate(${degreesResult}deg)`});
			} else {
				clearInterval(animateFunc);
			}
		}, 20);
	} else {
		$counter.text('Invalid value');
	}
});
