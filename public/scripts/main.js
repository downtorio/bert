const btns = document.getElementsByClassName('btn');

for (const btn of btns) {
	btn.addEventListener('mouseenter', function() {
		this.classList.add('btn-hover');
	});

	btn.addEventListener('mouseleave', function() {
		this.classList.remove('btn-hover');
	});
}