const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", () =>
  nav.classList.toggle("active")
);

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message. We will contact you soon.");
    this.reset();
  });
}

// COUNTERS
const counters = document.querySelectorAll('.counter');
const speed = 200; // smaller = faster

function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const count = +counter.innerText;
  const increment = target / speed;

  if (count < target) {
    counter.innerText = Math.ceil(count + increment);
    setTimeout(() => animateCounter(counter), 20);
  } else {
    counter.innerText = target;
  }
}

// IntersectionObserver to trigger when visible
let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target); // stop observing just this one
    }
  });
}, { threshold: 0.3 }); // starts when 30% visible

counters.forEach(counter => observer.observe(counter));

//enrolling
// Select the form
const enrollForm = document.getElementById("enrollForm");

enrollForm.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page reload

  // Get form values
  const name = this.name.value;
  const email = this.email.value;
  const year = this.year.value;
  const gender = this.gender.value;
  const interest = this.interest.value;
  const message = this.message.value;

  // Create thank-you message
  const thankMessage = document.createElement("div");
  thankMessage.classList.add("thank-you");
  thankMessage.innerHTML = `
    <h3>Thank you, ${name}!</h3>
    <p>Your enrollment request has been received. We will contact you soon.</p>
  `;

  // Insert message after the form
  this.parentElement.appendChild(thankMessage);

  // Fade-in animation
  thankMessage.style.opacity = 0;
  setTimeout(() => {
    thankMessage.style.transition = "opacity 0.8s";
    thankMessage.style.opacity = 1;
  }, 50);
});
