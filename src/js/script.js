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


function handleOpenRequestACallModal(e) {
	e.preventDefault();
	modalRequestCall.classList.add("active");
	document.body.style.overflowY = "hidden";
}

function handleCloseRequestACallModal(e) {
	modalRequestCall.classList.remove("active");
	document.body.style.overflowY = "";
}

function handleOpenRepairIphoneModal(e) {
	e.preventDefault();
	modalRepairIphone.classList.add("active");
	document.body.style.overflowY = "hidden";
}

function handleCloseRepairIphoneModal(e) {
	modalRepairIphone.classList.remove("active");
	document.body.style.overflowY = "";
}

function handleOpenUsedIphoneModal(e) {
	e.preventDefault();
	modalUsedIphones.classList.add("active");
	document.body.style.overflowY = "hidden";
}

function handleCloseUsedIphoneModal(e) {
	modalUsedIphones.classList.remove("active");
	document.body.style.overflowY = "";
}

requestCallOpenModal.addEventListener("click", handleOpenRequestACallModal);

requestCallCloseModal.addEventListener("click", handleCloseRequestACallModal);

repairIphoneOpenModal.addEventListener("click", handleOpenRepairIphoneModal);

repairIphoneCloseModal.addEventListener("click", handleCloseRepairIphoneModal);

usedIphoneOpenModal.addEventListener("click", handleOpenUsedIphoneModal);

usedIphonesCloseModal.addEventListener("click", handleCloseUsedIphoneModal);



function StopScroll() {
	if (condition) {

	} else {

	}
}