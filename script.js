// ====== Visibility change for title and favicon =====
document.addEventListener('visibilitychange', function () {
  const favicon = document.getElementById("favicon");

  if (document.visibilityState === "visible") {
    document.title = "Portfolio | KiranKumar";
    if (favicon) {
      favicon.setAttribute("href", "Images/favicon.webp");
    }
  } else {
    document.title = "Come Back To Portfolio";
    if (favicon) {
      favicon.setAttribute("href", "Images/favhand.png");
    }
  }
});

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// Load saved theme or default to light
const savedTheme = localStorage.getItem("theme");

if (!savedTheme || savedTheme === "light") {
  // Default light mode
  document.body.classList.remove("dark");
  themeIcon.classList.replace("fa-sun", "fa-moon"); // show moon icon for toggle
  localStorage.setItem("theme", "light");
} else if (savedTheme === "dark") {
  // Load dark mode
  document.body.classList.add("dark");
  themeIcon.classList.replace("fa-moon", "fa-sun"); // show sun icon for toggle
}


themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeIcon.classList.toggle("fa-sun", isDark);
  themeIcon.classList.toggle("fa-moon", !isDark);

  localStorage.setItem("theme", isDark ? "dark" : "light");
});


// ====== Typed.js effect =====
var typed = new Typed(".typing-text", {
  strings: [
    "frontend development",
    "backend development",
    "web designing",
    "web development"
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
  loop: true
});

// ====== DOMContentLoaded for menu, scroll, and contact form =====
document.addEventListener('DOMContentLoaded', function () {

  const menu = document.getElementById('menu');
  const navbar = document.querySelector('.navbar');
  const scrollTopBtn = document.getElementById('scroll-top');
  const navLinks = document.querySelectorAll('.navbar ul li a');

  // Menu toggle for mobile
  menu.addEventListener('click', function () {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');

    document.body.classList.toggle(
      'no-scroll',
      navbar.classList.contains('nav-toggle')
    );
  });

  // Scroll handler
  function handleScroll() {
    const scrollTop = window.scrollY;

    // Scroll-to-top button
    if (scrollTop > 60) {
      scrollTopBtn.classList.add('active');
    } else {
      scrollTopBtn.classList.remove('active');
    }

    // Scroll spy
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const height = section.offsetHeight;
      const offset = section.offsetTop - 200;
      const id = section.getAttribute('id');

      if (scrollTop > offset && scrollTop < offset + height) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.navbar ul li a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
  window.addEventListener('load', handleScroll);

  // Smooth scrolling for navbar links (fixed)
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {

      const href = this.getAttribute('href');

      // ❌ Prevent default only for section links
      e.preventDefault();

      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }

      menu.classList.remove('fa-times');
      navbar.classList.remove('nav-toggle');
      document.body.classList.remove('no-scroll');
    });
  });

  // Smooth scroll for scroll-to-top button
  scrollTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ====== Contact form submission  =====
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Capture form data
      const name = contactForm.name.value;
      const email = contactForm.email.value;
      const message = contactForm.message.value;

      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);

      // Simulate successful submission
      alert("Form Submitted Successfully!\nCheck console for your form data.");

      // Reset the form
      contactForm.reset();
    });
  }

});

// ====== 3D Tilt Effect ======
document.querySelectorAll('.tilt').forEach((element) => {

  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;

    element.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  });

  element.addEventListener('mouseleave', () => {
    element.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  });

});

// ===== Scroll Fade-Up Reveal =====
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;

        setTimeout(() => {
          entry.target.classList.add("active");
        }, delay);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

reveals.forEach((el) => observer.observe(el));

