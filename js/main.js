// =====================
// popup
// =====================
const btnOpenPopup = document.querySelectorAll('.btn-marketing');
const btnClosenPopup = document.querySelectorAll('.btn-close-popup');

btnOpenPopup.forEach((el) => {
	el.addEventListener('click', (e) => {
		const section = e.target.closest('section');
		section.classList.add('show-popup');
	});
});

btnClosenPopup.forEach((el) => {
	el.addEventListener('click', (e) => {
		const section = e.target.closest('section');
		section.classList.remove('show-popup');
	});
});

// =====================
// nav active
// =====================

// const navLink = document.querySelectorAll('.nav-link');
