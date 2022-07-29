let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
  

window.onscroll = () => {
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});

videoBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#slider').src = src;
  });
});

var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView:1,
          },
          768: {
            slidesPerView:2,
          },
          1024: {
            slidesPerView:2,
          },
        },
      });

function sendEmail() {
  Email.send({
    SecureToken: "adac308c-0f23-47ed-878f-707cb3b6b025",
    To : 'gunasowntharis@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New contact Form Enquiry",
    Body: "First Name:" + document.getElementById("First name").value
      + "<br> Last Name:" + document.getElementById("Last name").value
      + "<br> E-mail:" + document.getElementById("email").value
      + "<br> Contact no:" + document.getElementById("number").value
}).then(
  message => alert("Message Sent Successfully")
);
}      