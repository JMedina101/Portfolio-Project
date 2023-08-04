const animateElements = document.querySelectorAll(".animate-on-scroll");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.25, // Adjust this threshold to your preference
};

function fadeInAnimation(entries, observer) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Set a delay for each card based on its index
      const delay = (index + 1) * 200; // You can adjust the delay time (in milliseconds) here
      setTimeout(() => {
        entry.target.classList.add("animate");
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(fadeInAnimation, options);
animateElements.forEach((element) => {
  observer.observe(element);
});
