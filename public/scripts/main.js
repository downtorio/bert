const btns = document.getElementsByClassName('btn');
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const modal = document.getElementById('modal');

for (const btn of btns) {
	btn.addEventListener('mouseenter', function() {
		this.classList.add('btn-hover');
	});

	btn.addEventListener('mouseleave', function() {
		this.classList.remove('btn-hover');
	});
}

burger.addEventListener('click', function() {
	// Display Modal
	modal.classList.toggle('modal-show');

	// If modal is on, show black X icon; otherwise show turquoise burger icon
	// There's a bit of a potential problem here in that our nav's default behavior inspects the presence of .modal-show as the basis for displaying dark-nav or turquoise nav; later we'll use dark nav for our lighter background pages. We'll need to change the dark-nav behavior when we get there...
	if (modal.classList.contains('modal-show')) {
		this.classList.add('close');
		nav.classList.add('dark-nav');
	} else {
		this.classList.remove('close');
		nav.classList.remove('dark-nav');
	}
});