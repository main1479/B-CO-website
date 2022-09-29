// contact area
function sendMail() {
	var params = {
		from_name: document.getElementById('FullName').value,
		email_id: document.getElementById('email_id').value,
		message: document.getElementById('message').value,
	};

	const serviceID = 'service_gmzsuwe';
	const templateID = 'template_evzdp95';

	emailjs
		.send(serviceID, templateID, params)
		.then((res) => {
			console.log(res);
			alert('Your message sent successfully!!');
		})
		.catch((err) => console.log(err));
}

// =====================
// popup
// =====================
const btnOpenPopup = document.querySelectorAll('.btn-marketing');
const btnClosenPopup = document.querySelectorAll('.btn-close-popup');
// const btnTarms = document.querySelector('.btn-tarms');
const footer = document.querySelector('.footer');

btnOpenPopup.forEach((el) => {
	el.addEventListener('click', (e) => {
		const section = e.target.closest('section');
		section.classList.add('show-popup');
	});
});

// btnTarms.addEventListener('click', () => {
// 	footer.classList.add('show-popup');
// });

btnClosenPopup.forEach((el) => {
	el.addEventListener('click', (e) => {
		const section = e.target.closest('section');
		if (section) {
			section.classList.remove('show-popup');
		} else {
			footer.classList.remove('show-popup');
		}
	});
});

// =====================
// nav link and dot link active
// =====================

const navLink = document.querySelectorAll('.nav-link');
const dotBtn = document.querySelectorAll('.btn-dot');
const sections = document.querySelectorAll('.js-section');

function changeLinkActive(target) {
	const id = target.dataset.id || target.id;
	navLink.forEach((el) => {
		el.classList.remove('active');
	});
	dotBtn.forEach((el) => {
		el.classList.remove('active');
	});

	const link = document.querySelector(`a.nav-link[href="#${id}"]`);
	if (link) {
		link.classList.add('active');
	}
}
function changeDotActive(target) {
	const id = target.id;
	dotBtn.forEach((el) => {
		el.classList.remove('active');
	});
	const dotLink = document.querySelector(`a.btn-dot[href="#${id}"]`);
	if (dotLink) {
		dotLink.classList.add('active');
	}
}
function observeSection(entries, observer) {
	const [entry] = entries;
	if (!entry.isIntersecting) return;
	changeLinkActive(entry.target);
	changeDotActive(entry.target);
}

const sectionObesrver = new IntersectionObserver(observeSection, { root: null, threshold: 0.5 });

sections.forEach((section) => {
	sectionObesrver.observe(section);
});

//  cookie-consent-modal

let cookieModal = document.querySelector('.cookie-consent-modal');
let cancelCookieBtn = document.querySelector('.Cbtn.cancel');
let acceptCookieBtn = document.querySelector('.Cbtn.accept');

cancelCookieBtn.addEventListener('click', function () {
	cookieModal.classList.remove('activeC');
});
acceptCookieBtn.addEventListener('click', function () {
	cookieModal.classList.remove('activeC');
	localStorage.setItem('cookieAccepted', 'yes');
});

setTimeout(function () {
	let cookieAccepted = localStorage.getItem('cookieAccepted');
	if (cookieAccepted != 'yes') {
		cookieModal.classList.add('activeC');
	}
}, 2000);

// scroll down btn
const scrollDownBtn = document.querySelectorAll('.scroll-down-btn');

scrollDownBtn.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		scrollDownBtn.forEach((item) => {
			item.classList.remove('active');
		});
		const targetBtn = e.target;
		targetBtn.classList.add('active');
	});
});
