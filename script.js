/* THEME TOGGLE (persist) */
const THEME_KEY = "portfolio_theme";
const body = document.body;

function setInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const btns = document.querySelectorAll('.theme-toggle');
  if (saved === "light") {
    body.classList.add('light-mode');
    btns.forEach(b => b.textContent = '🌙');
  } else {
    body.classList.remove('light-mode');
    btns.forEach(b => b.textContent = '☀️');
  }
}
function toggleThemeUI() {
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');
  document.querySelectorAll('.theme-toggle').forEach(b => b.textContent = isLight ? '🌙' : '☀️');
}
document.addEventListener('click', e => {
  if (e.target && e.target.classList.contains('theme-toggle')) toggleThemeUI();
});
setInitialTheme();

/* SCROLL REVEAL */
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.12, rootMargin: "0px 0px -10px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(f => appearOnScroll.observe(f));

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});



const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.opacity = "1";
    backToTopBtn.style.visibility = "visible";
  } else {
    backToTopBtn.style.opacity = "0";
    backToTopBtn.style.visibility = "hidden";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


function openCert(img, title, desc) {
  document.getElementById("certImage").src = img;
  document.getElementById("certTitle").innerText = title;
  document.getElementById("certDesc").innerText = desc;
  document.getElementById("certModal").style.display = "flex";
}

function closeCert() {
  document.getElementById("certModal").style.display = "none";
}


const modal = document.getElementById("designModal");
const imgViewer = document.getElementById("imgViewer");
const pdfViewer = document.getElementById("pdfViewer");
const closeBtn = document.querySelector(".close-modal");

document.querySelectorAll(".design-card").forEach(card => {
  card.addEventListener("click", () => {
    const type = card.dataset.type;
    const src = card.dataset.src;

    modal.style.display = "flex";

    if (type === "pdf") {
      imgViewer.style.display = "none";
      pdfViewer.style.display = "block";
      pdfViewer.src = src;
    } else {
      pdfViewer.style.display = "none";
      imgViewer.style.display = "block";
      imgViewer.src = src;
    }
  });
});


function openCert(img, title, desc) {
  document.getElementById("certImg").src = img;
  document.getElementById("certTitle").innerText = title;
  document.getElementById("certDesc").innerText = desc;
  document.getElementById("certModal").style.display = "flex";
}

function closeCert() {
  document.getElementById("certModal").style.display = "none";
}
