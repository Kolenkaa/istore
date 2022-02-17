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

const requestCallOpenModal = document.getElementById('open__modal-request--call');
const repairIphoneOpenModal = document.getElementById('open__modal-repair--iphone');
const usedIphoneOpenModal = document.getElementById('open__modal-used--iphones');

const modalRequestCall = document.getElementById('modal__request-call');
const modalRepairIphone = document.getElementById('modal__repair-iphone');
const modalUsedIphones = document.getElementById('modal__used-iphones');

const requestCallCloseModal = document.getElementById('close__modal-request--call');
const repairIphoneCloseModal = document.getElementById('close__modal-repair--iphone');
const usedIphonesCloseModal = document.getElementById('close__modal-used--iphone');

requestCallOpenModal.addEventListener('click', function (e) {
	e.preventDefault();
	modalRequestCall.classList.add('active');
})

requestCallCloseModal.addEventListener('click', () => {
	modalRequestCall.classList.remove('active');
})

repairIphoneOpenModal.addEventListener('click', function (e) {
	e.preventDefault();
	modalRepairIphone.classList.add('active');
})

repairIphoneCloseModal.addEventListener('click', () => {
	modalRepairIphone.classList.remove('active');
})

usedIphoneOpenModal.addEventListener('click', function (e) {
	e.preventDefault();
	modalUsedIphones.classList.add('active');
})

usedIphonesCloseModal.addEventListener('click', () => {
	modalUsedIphones.classList.remove('active');
})