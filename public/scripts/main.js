const btns 				= document.getElementsByClassName('btn');
const burger 			= document.getElementById('burger');
const learnMoreBtn 	= document.getElementById('learn-more-btn');
const modal 			= document.getElementById('modal');
const nav 				= document.getElementById('nav');


/* BUTTON HOVER EFFECT */
for (const btn of btns) {
	btn.addEventListener('mouseenter', function() {
		this.classList.add('btn-hover');
	});

	btn.addEventListener('mouseleave', function() {
		this.classList.remove('btn-hover');
	});
}


/* HAMBURGER MENU / MODAL
 * Be mindful that the home nav behaves differently than the about/contact nav
 * We want our home nav to stay turquoise because the home page has a dark background, and the icon won't be visible if it's dark as well */
burger.addEventListener('click', function() {
	// Display Modal
	modal.classList.toggle('modal-show');

	// If modal is on, change the burger icon to an X icon
	if (modal.classList.contains('modal-show')) {
		this.classList.add('close');
		// If user is at the home page, change the menu icon from turquoise to black when modal is on
		if(nav.classList.contains('home-nav')) {
			nav.classList.add('dark-nav');
		}
	
	// If modal is off, revert back from the X icon to a burger icon
	} else {
		this.classList.remove('close');
		// If user is at the home page, change the menu icon from black to turquoise when modal is off
		if(nav.classList.contains('home-nav')) {
			nav.classList.remove('dark-nav');
		}
	}
});


/* SMOOTH SCROLL
 * Upon clicking "Learn More" buttons on About and Contact pages, smooth scroll to their respective sections */
learnMoreBtn.addEventListener('click', function(e) {
	e.preventDefault();
	const section = document.querySelector(this.getAttribute('href'));
	section.scrollIntoView({ 
		block: "start",
		inline: "nearest",	// 'block' and 'inline' ensures that when we scroll, the top of the element aligns with the top of the viewport
		behavior: "smooth" 
	});
});