"use strict";

const pageLinks = document.querySelectorAll('nav[aria-label="Hobby pages"] a');
const pages = document.querySelectorAll("main > section");

function showPage(pageId) {
	const requestedPage = document.getElementById(pageId);
	const activePage = requestedPage || document.getElementById("what");

	pages.forEach((page) => {
		page.hidden = page !== activePage;
	});

	pageLinks.forEach((link) => {
		const isCurrent = link.getAttribute("href") === `#${activePage.id}`;
		if (isCurrent) {
			link.setAttribute("aria-current", "page");
		} else {
			link.removeAttribute("aria-current");
		}
	});
	document.title = `Overgrown Operations Airsoft ⌖ ${activePage.querySelector("h2").textContent}`;

	activePage.focus({ preventScroll: true });
}

function pageFromHash() {
	return window.location.hash.slice(1) || "what";
}

pageLinks.forEach((link) => {
	link.addEventListener("click", () => {
		showPage(link.hash.slice(1));
	});
});

window.addEventListener("hashchange", () => {
	showPage(pageFromHash());
});

showPage(pageFromHash());
