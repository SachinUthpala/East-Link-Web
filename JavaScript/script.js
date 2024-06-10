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



// js for slider

let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-slideIndex * 100}%)`;
    });
}

function changeSlide(direction) {
    let slides = document.querySelectorAll('.slide');
    slideIndex += direction;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    setInterval(() => {
        changeSlide(1);
    }, 10000); // Change image every 3 seconds
});











