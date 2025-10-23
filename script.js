 var swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 30,

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });


  // Define o tempo inicial em segundos (2h 6min 8s)
let timeLeft = 2 * 3600 + 6 * 60 + 8;

const countdownElement = document.getElementById('countdown');

function updateTimer() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  countdownElement.textContent = 
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  if (timeLeft > 0) {
    timeLeft--;
    setTimeout(updateTimer, 1000);
  } else {
    countdownElement.textContent = "Oferta Expirada!";
  }
}

updateTimer();