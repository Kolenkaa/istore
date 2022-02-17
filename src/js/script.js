document.addEventListener("DOMContentLoaded", function () {
	const burger = document.querySelector(".burger");
	const mobileMenu = document.querySelector(".mobile-menu__navigation");
	const mobilePhoneIcons = document.querySelector(".mobile-menu__phoneicons");
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

/*-----------modal-------------------------*/

const openModal = document.getElementById('open__modal');
const openModalRepair = document.getElementById('open__modal-repair');
const openModalUsedIphones = document.getElementById('open__modal-used--iphones');
const closeModal = document.getElementById('close__modal');
const modal = document.getElementById('modal');
const modalRepair = document.getElementById('modal__repair');
const modalUsedIphones = document.getElementById('modal__used-iphones');

openModal.addEventListener('click', function (e) {
	e.preventDefault();
	modal.classList.add('active');
})

closeModal.addEventListener('click', () => {
	modal.classList.remove('active');
})

openModalRepair.addEventListener('click', function (e) {
	e.preventDefault();
	modalRepair.classList.add('active');
})

closeModal.addEventListener('click', () => {
	modalRepair.classList.remove('active');
})

openModalUsedIphones.addEventListener('click', function (e) {
	e.preventDefault();
	modalUsedIphones.classList.add('active');
})

closeModal.addEventListener('click', () => {
	modalUsedIphones.classList.remove('active');
})