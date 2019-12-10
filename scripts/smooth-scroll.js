// Vanilla JavaScript Scroll to Anchor
// @ https://perishablepress.com/vanilla-javascript-scroll-anchor/

//(function() {
window.onload = function() {
	scrollTo();
}
//})();

function scrollTo() {
	const links = document.querySelectorAll('.scroll');
	links.forEach(each => (each.onclick = scrollAnchors));
	//links.forEach(each => (each.onclick = function() {alert('hello');}));
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
//	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	var targetID = (respond) ? respond.getAttribute('targetid') : this.getAttribute('targetid');
	const targetAnchor = document.querySelector('#'+targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
//	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	document.querySelector('.outer-container').scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}