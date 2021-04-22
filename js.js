

const train = document.querySelector('.train'),
	start = document.querySelector('.start'),
	pause = document.querySelector('.pause'),
	reset = document.querySelector('.reset');
let count = 0,
	driveInterval,
	isRunning = true;

const trainDrive = function() {
	 driveInterval = requestAnimationFrame(trainDrive);
	count++;
	if (count < 1100) {
		train.style.left = count + 'px';
	} else {
		cancelAnimationFrame(driveInterval);
	}
};

start.addEventListener('click', () => {
	 if (isRunning) {
		 driveInterval = requestAnimationFrame(trainDrive);
		 start.style.display = 'none';
		 pause.style.display = 'inline-block';
	}
	isRunning = !isRunning;
});

pause.addEventListener('click', () => {
	start.style.display = 'inline-block';
	pause.style.display = 'none';
	isRunning = !isRunning;
	cancelAnimationFrame(driveInterval);
});

reset.addEventListener('click', () => {
	train.style.left = 0 + 'px';
	count = 0;
});
