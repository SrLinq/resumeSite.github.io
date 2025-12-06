document.addEventListener("DOMContentLoaded", () => {
  // Typing Effect
  const textElement = document.getElementById("typing-text");
  const textToType = "Full Stack Engineer";
  let index = 0;

  function typeText() {
    if (index < textToType.length) {
      textElement.textContent += textToType.charAt(index);
      index++;
      setTimeout(typeText, 100);
    }
  }
  //something
  // Start typing after a short delay
  setTimeout(typeText, 500);

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Intersection Observer for Scroll Animations (if we add more scroll-triggered elements later)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in-up").forEach((el) => {
    observer.observe(el);
  });
});
