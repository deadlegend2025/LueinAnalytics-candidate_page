const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
// Select elements
const howItWorksBtn = document.getElementById("howItWorksBtn");
const videoModal = document.getElementById("videoModal");
const closeBtn = document.querySelector(".close-btn");

// Pause video on page load or refresh
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("videoPlayer");
  if (video) {
    video.pause(); // Ensure video is paused on load
  }
});

// Open modal when "How It Works?" button is clicked
howItWorksBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  videoModal.style.display = "flex"; // Show modal
});

// Close modal when close button is clicked
closeBtn.addEventListener("click", () => {
  videoModal.style.display = "none";
  const video = document.getElementById("videoPlayer");
  video.pause(); // Pause video when modal is closed
});

// Close modal if user clicks outside the video
window.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    videoModal.style.display = "none";
    const video = document.getElementById("videoPlayer");
    video.pause(); // Pause video when modal is closed
  }
});

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".explore__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".job__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".offer__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});
