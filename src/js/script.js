document.addEventListener("DOMContentLoaded", function () {
	const burger = document.querySelector(".burger");
	const mobileMenu = document.querySelector(".mobile-menu--navigation");
	const mobilePhoneIcons = document.querySelector(".mobile-menu--phoneicons");
	const mobileContacts = document.querySelector(".header__top");

	burger.onclick = function (event) {
		burger.classList.toggle("active");
		mobileMenu.classList.toggle("active");
		mobilePhoneIcons.classList.remove("active");
		mobileContacts.classList.remove("active");
	};

	mobilePhoneIcons.onclick = function (event) {
		mobilePhoneIcons.classList.toggle("active");
		mobileContacts.classList.toggle("active");
		burger.classList.remove("active");
		mobileMenu.classList.remove("active");
	};

});
