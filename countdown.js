const limit = 300; // countdown limit set to 5 minutes
let remaining = limit;
let timePassed = 0;
let timerInt = null;

function formatTimeLeft(time){
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;
	if(seconds < 10){
		let seconds = `0${seconds}`;
	}

	return `${minutes}:${seconds}`;
}

function startTimer(){
	timerInt = setInterval(() => {
		timePassed = timePassed += 1;
		remaining = limit - timePassed;

		document.getElementById("countdown-timer-label").innerHTML = formatTimeLeft(remaining);

		if(remaining == 0){
			onTimesUp();
		}
	}, 1000);
}

function onTimesUp(){
	clearInterval(timerInt);
}

startTimer();

