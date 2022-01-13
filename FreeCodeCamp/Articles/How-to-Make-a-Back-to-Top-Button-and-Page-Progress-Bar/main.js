const showOnPx = 100; 
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
	return document.documentElement || document.body;
};

const goToTop = () => {
	document.body.scrollIntoView({
		behavior: 'smooth',
	});
};

backToTopButton.addEventListener('click', goToTop)

// PROGRESS BAR
const pageProgressBar = document.querySelector('.progress-bar');

document.addEventListener('scroll', () => {
	const scrolledPercentage = 
		(scrollContainer().scrollTop / (scrollContainer().scrollHeight - scrollContainer().clientHeight)) * 100;

	pageProgressBar.style.width = `${scrolledPercentage}%`

	if (scrollContainer().scrollTop > showOnPx) {
		backToTopButton.classList.remove('hidden');
	} else {
		backToTopButton.classList.add('hidden');
	}
});
