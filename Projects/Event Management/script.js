// =========================
// CALL BUTTON
// =========================
document.getElementById("callBtn").onclick = function () {
  window.location.href = "tel:7871330205";
};

// =========================
// NAVBAR SCROLL EFFECT & STICKY
// =========================
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
  topBtn.style.display = window.scrollY > 400 ? "block" : "none"; // Back to top
  highlightNav(); // Active section highlight
});

// =========================
// BACK TO TOP BUTTON
// =========================
const topBtn = document.querySelector(".top");
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =========================
// SCROLL ANIMATION (fade-up)
// =========================
const fadeSections = document.querySelectorAll(".fade-up");
function handleScrollAnimation() {
  const trigger = window.innerHeight - 100;
  fadeSections.forEach(section => {
    if (section.getBoundingClientRect().top < trigger) {
      section.classList.add("show");
    }
  });
}
window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);



// =========================
// CONTACT FORM MESSAGE
// =========================
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    this.reset();
  });
}

// =========================
// MOBILE MENU TOGGLE
// =========================
const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // change icon
  if (navMenu.classList.contains("active")) {
    menuBtn.innerHTML = "✕";
  } else {
    menuBtn.innerHTML = "☰";
  }
});

// close menu after click
document.querySelectorAll("nav ul li a:not(.dropdown > a)").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.innerHTML = "☰";
  });
});

// =========================
// SMOOTH SCROLL FOR NAV LINKS
// =========================
document.querySelectorAll('nav ul li a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// =========================
// MOBILE DROPDOWN TOGGLE
// =========================
document.querySelectorAll(".dropdown > a").forEach(item => {
  item.addEventListener("click", function (e) {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      this.parentElement.classList.toggle("active");
    }
  });
});


// =========================
// IMAGE LIGHTBOX POPUP WITH NAVIGATION
// =========================
let currentImgIndex = 0;
const images = document.querySelectorAll(".gallery-img");
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentImgIndex = index;
    showLightbox(img);
  });
});


function showLightbox(img) {

  lightbox.classList.add("show");   // ⭐ THIS WAS MISSING

  lightbox.innerHTML = `
<span class="close">✕</span>
<button class="prev">&lt;</button>
<img src="${img.src}" alt="${img.alt}">
<p class="caption">${img.alt}</p>
<button class="next">&gt;</button>
`;

  lightbox.querySelector(".close").onclick = () => {
    lightbox.classList.remove("show");
  };

  lightbox.querySelector(".prev").onclick = prevImg;
  lightbox.querySelector(".next").onclick = nextImg;
}

function prevImg() {
  currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
  showLightbox(images[currentImgIndex]);
}

function nextImg() {
  currentImgIndex = (currentImgIndex + 1) % images.length;
  showLightbox(images[currentImgIndex]);
}

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("show");
});


// =========================
// STICKY NAVBAR - ACTIVE SECTION HIGHLIGHT
// =========================
const sections = document.querySelectorAll("section, .service-section, .wedding-section, .Babyshower-section, .CorporateEvents-section, .Photography-section, .Catering-section, .MakeupArtist-section, .DJs-section");
const navLinks = document.querySelectorAll("nav ul li a");

function highlightNav() {
  let current = "";
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// =========================
// COUNTER ANIMATION FOR STATS
// =========================
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

const reviews = document.querySelectorAll(".review-card");
let reviewIndex = 0;
reviews.forEach((r, i) => i === 0 ? r.classList.add("show") : r.classList.remove("show"));

function slideReviewsFade() {
  reviews[reviewIndex].classList.remove("show");
  reviewIndex = (reviewIndex + 1) % reviews.length;
  reviews[reviewIndex].classList.add("show");
}
setInterval(slideReviewsFade, 3000);

