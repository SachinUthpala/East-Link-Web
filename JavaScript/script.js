const dropdownMenu = document.querySelector('.dropdown-menu');
const toggleNavbar = document.querySelector('.toggle-navbar');
const dropdownClose = document.querySelector('.dropdown-close');
const navMenu = document.querySelector('.nav-menu');

dropdownMenu.previousElementSibling.addEventListener('click', function () {
	if(window.innerWidth < 576) {
		dropdownMenu.classList.add('show');
		toggleNavbar.classList.add('hide');
	}
})

dropdownClose.addEventListener('click', function () {
	if(window.innerWidth < 576) {
		dropdownMenu.classList.remove('show');
		toggleNavbar.classList.remove('hide');
	}
})


toggleNavbar.addEventListener('click', function () {
	if(window.innerWidth < 576) {
		navMenu.classList.toggle('show');

		if(navMenu.classList.contains('show')) {
			this.classList.replace('bx-menu', 'bx-x');
		} else {
			this.classList.replace('bx-x', 'bx-menu');
		}
	}
})


function goLocation() {
	Swal.fire({
		title: "Are you sure?",
		text: "Do you Want to see us on Map ?",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#19A519",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes, see on Map!"
	  }).then((result) => {
		if (result.isConfirmed) {
			location.href='https://maps.app.goo.gl/bS5K4JQY2hXx56Ui9';
		}
	  });
}











