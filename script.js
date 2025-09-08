// ----- Typewriter for name -----
const text = "Hi, I'm Vishwas Sharma";
let i = 0;
const typeEl = document.querySelector(".typing-text");

(function typeWriter() {
  if (i < text.length) {
    typeEl.textContent += text.charAt(i++);
    setTimeout(typeWriter, 85);
  }
})();

// ----- Rotating roles with fade -----
const roles = [
  "Software Developer",
  "AI/ML Enthusiast",
  "Open Source Enthusiast",
  "AI Generalist",
  "Full Stack Developer",
  "Aspiring SWE",
  "Cyber Security Enthusiast"
];

const roleEl = document.getElementById("role-text");
let idx = 0;

function swapRole() {
  roleEl.style.opacity = 0;
  setTimeout(() => {
    roleEl.textContent = roles[idx];
    roleEl.style.opacity = 1;
    idx = (idx + 1) % roles.length;
  }, 500);
}
swapRole();
setInterval(swapRole, 2800);

// ----- Scroll-spy to highlight active nav link -----
const sections = document.querySelectorAll("section, footer");
const navLinks = document.querySelectorAll(".nav-link");

const sectionById = {};
sections.forEach(sec => (sectionById[`#${sec.id}`] = sec));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = `#${entry.target.id}`;
        navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === id));
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
);

sections.forEach(sec => observer.observe(sec));
