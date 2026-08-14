const downloadEl = document.getElementById("downloadSpeed");
const uploadEl = document.getElementById("uploadSpeed");
const pulse = document.querySelector(".pulse");

let d = 84.7;
let u = 12.3;

function tick() {
  d += (Math.random() - 0.5) * 7;
  u += (Math.random() - 0.5) * 2.2;
  d = Math.max(42, Math.min(118, d));
  u = Math.max(4, Math.min(24, u));
  downloadEl.innerHTML = `${d.toFixed(1)} <span>MB/s</span>`;
  uploadEl.innerHTML = `${u.toFixed(1)} <span>MB/s</span>`;
  pulse.style.strokeDashoffset = `${Math.random() * 12}px`;
}
setInterval(tick, 1800);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".feature-card,.details,.download-card").forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
