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
// nav link and dot link active
// =====================

const navLink = document.querySelectorAll('.nav-link');
const dotBtn = document.querySelectorAll('.btn-dot');
const sections = document.querySelectorAll('.js-section');

function changeLinkActive(target) {
	const id = target.id;
	navLink.forEach((el) => {
		el.classList.remove('active');
	});
	dotBtn.forEach((el) => {
		el.classList.remove('active');
	});

	const link = document.querySelector(`a.nav-link[href="#${id}"]`);
	const dotLink = document.querySelector(`a.btn-dot[href="#${id}"]`);

	if (link) {
		link.classList.add('active');
	}
	if (dotLink) {
		dotLink.classList.add('active');
	}
}
function observeSection(entries, observer) {
	const [entry] = entries;
	if (!entry.isIntersecting) return;
	changeLinkActive(entry.target);
}

const sectionObesrver = new IntersectionObserver(observeSection, { root: null, threshold: 0.5 });

sections.forEach((section) => {
	sectionObesrver.observe(section);
});
