/* ================= MOBILE NAV ========================= */
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
});

/* ================= VIDEO ========================= */
const videoBtn = document.querySelector('#video-story-btn');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoOverlay = document.querySelector('#video-story-overlay');
const videoFile = document.querySelector('#video-story');

videoBtn.addEventListener('click', function () {

	function toggleOverlay(event){
		if (event.type === 'mouseleave') {
			videoOverlay.classList.add('hidden');
		} else {
			videoOverlay.classList.remove('hidden');
		}
	}

	if (videoFile.paused) {
		videoFile.play();
		videoBtnIcon.src = './img/story/pause-white.svg';

		videoOverlay.onmouseleave = toggleOverlay;
		videoOverlay.onmouseenter = toggleOverlay;

	} else {
		videoFile.pause();
		videoBtnIcon.src = './img/story/play-white.svg';
		videoOverlay.onmouseleave = null;
		videoOverlay.onmouseenter = null;

	}

})

//   Для формы

const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
	e.preventDefault();
	popUp.classList.add('active');
})


closePopUp.addEventListener('click', () => {
	popUp.classList.remove('active');
})

const opennPopUp = document.getElementById('openn_pop_up');
const closeePopUp = document.getElementById('pop_up_close');
const poppUp = document.getElementById('pop_up');

opennPopUp.addEventListener('click', function(e){
	e.preventDefault();
	poppUp.classList.add('active');
})


closeePopUp.addEventListener('click', () => {
	poppUp.classList.remove('active');
})

const opennnPopUp = document.getElementById('opennn_pop_up');
const closeeePopUp = document.getElementById('pop_up_close');
const popppUp = document.getElementById('pop_up');

opennnPopUp.addEventListener('click', function(e){
	e.preventDefault();
	popppUp.classList.add('active');
})


closeeePopUp.addEventListener('click', () => {
	popppUp.classList.remove('active');
})

const opennnnPopUp = document.getElementById('opennnn_pop_up');
const closeeeePopUp = document.getElementById('pop_up_close');
const poppppUp = document.getElementById('pop_up');

opennnnPopUp.addEventListener('click', function(e){
	e.preventDefault();
	poppppUp.classList.add('active');
})


closeeeePopUp.addEventListener('click', () => {
	poppppUp.classList.remove('active');
})

const opennnntPopUp = document.getElementById('log');
const closeeeetPopUp = document.getElementById('log_up_close');
const popppptUp = document.getElementById('log_up');

opennnntPopUp.addEventListener('click', function(e){
	e.preventDefault();
	popppptUp.classList.add('active');
})


closeeeetPopUp.addEventListener('click', () => {
	popppptUp.classList.remove('active');
})
