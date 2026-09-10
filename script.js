// Navigation toggle
const hamburger = document.getElementById("hamburgerMenu");
const mainHeader = document.querySelector(".main-header");
if (hamburger && mainHeader) {
  hamburger.addEventListener("click", () => {
    mainHeader.classList.toggle("menu-open");
  });
}

// Main slider
const slider = document.getElementById("s3Slider");
const prevBtn = document.getElementById("s3PrevBtn");
const nextBtn = document.getElementById("s3NextBtn");
const dots = document.querySelectorAll("#s3SliderDots .dot");

if (slider && prevBtn && nextBtn) {
  const slideCount = slider.children.length;
  let currentIndex = 0;
  
  function updateSlider(index) {
    if (index < 0) {
      index = slideCount - 1;
    } else if (index >= slideCount) {
      index = 0;
    }
    currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }
  
  prevBtn.addEventListener("click", () => updateSlider(currentIndex - 1));
  nextBtn.addEventListener("click", () => updateSlider(currentIndex + 1));
  
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => updateSlider(index));
  });
}

// Back to top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
if (scrollToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.8) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
