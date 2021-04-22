'use strict';

const input = document.querySelector('.input'),
	text = document.querySelector('.text'),
	doneTypingInterval = 300;
let typingTimer;

input.addEventListener('keyup', () => {
	clearTimeout(typingTimer);
	if (input.value) {
		typingTimer = setTimeout(doneTyping, doneTypingInterval);
	}
});

function doneTyping() {
	text.textContent = input.value;
}
