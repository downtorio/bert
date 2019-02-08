const btns 					= document.getElementsByClassName('btn');
const burger 				= document.getElementById('burger');
const contactUsSection	= document.getElementById('contact-us');
const footer				= document.querySelector('footer');
const learnMoreBtn 		= document.getElementById('learn-more-btn');
const modal 				= document.getElementById('modal');
const nav 					= document.getElementById('nav');
const playSection			= document.getElementById('play');


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
 * Upon clicking "Learn More" buttons on About and Contact pages, smooth scroll to their respective sections
 * Only add this functionality if learnMoreBtn exists in the page */
if (learnMoreBtn) {
	learnMoreBtn.addEventListener('click', function(e) {
		e.preventDefault();
		const section = document.querySelector(this.getAttribute('href'));
		section.scrollIntoView({ 
			block: "start",
			inline: "nearest",	// 'block' and 'inline' ensures that when we scroll, the top of the element aligns with the top of the viewport
			behavior: "smooth" 
		});
	});
}


/* CONTACT/ABOUT BURGER MENU
 * Don't forget that when using Waypoints, you need to add the js file as a <script> tag
 * Turn burger menu on Contact page turquoise when we get to the "Contact Us" section
 * Our burger menu on the Contact page is dark by default; our "Contact Us" section has a dark background, consequently the nav menu won't be visible when we scroll through that section. Fix it Jesus.
 * We're gonna Fix It Jesus by making our nav behave like our home-nav when it's within the "Contact Us" section: turquoise as a burger icon and dark as an X icon */
if (document.querySelector('header').classList.contains('contact-header')) {
	// This if statement ensures we only apply this Waypoint to the Contact page
	 new Waypoint({
		element: contactUsSection,
		handler: function(direction) {
			if (direction == 'down') {
				nav.classList.remove('dark-nav');
				nav.classList.add('home-nav');
			}

			if (direction == 'up') {
				nav.classList.remove('home-nav');
				nav.classList.add('dark-nav');
			}
		},
		offset: 30
	});
}


// Let's also do the same for the #play section in our About page. Just 'cause.
// Making sure we only apply this Waypoint to the About page:
if (document.querySelector('header').classList.contains('about-header')) {

	// The trigger for this Waypoint pertains to the TOP of the playSection
	new Waypoint({
		element: playSection,
		handler: function(direction) {
			if (direction == 'down') {
				nav.classList.remove('dark-nav');
				nav.classList.add('home-nav');
			}

			if (direction == 'up') {
				nav.classList.remove('home-nav');
				nav.classList.add('dark-nav');
			}
		},
		offset: 30
	});

	// The trigger for this Waypoint pertains to the BOTTOM of the playSection
	new Waypoint({
		element: playSection,
		handler: function(direction) {
			if (direction == 'down') {
				nav.classList.remove('home-nav');
				nav.classList.add('dark-nav');
			}

			if (direction == 'up') {
				nav.classList.remove('dark-nav');
				nav.classList.add('home-nav');
			}
		},
		offset: -470
			// remember playSection is 500px tall; 500px - 30px mid-height of the navbar = 470px
	});
}


// Let's also do it for the footer. Why not.
if (footer) {
	new Waypoint({
		element: footer,
		handler: function(direction) {
			if (direction == 'down') {
				nav.classList.remove('dark-nav');
				nav.classList.add('home-nav');
			}

			if (direction == 'up') {
				nav.classList.remove('home-nav');
				nav.classList.add('dark-nav');
			}
		},
		offset: 30
	});
}