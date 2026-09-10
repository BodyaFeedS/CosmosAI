document.addEventListener('DOMContentLoaded', () => {
  const arrowBtn = document.querySelector('.slider-arrow');
  const container = document.querySelector('.s2-cards-container');
  let isAnimating = false;
  if (!arrowBtn || !container) return;
  container.style.willChange = 'transform';
  arrowBtn.addEventListener('click', () => {
    if (window.innerWidth <= 1024) return;
    if (isAnimating) return;
    isAnimating = true;
    const firstChild = container.children[0];
    const clone = firstChild.cloneNode(true);
    clone.style.opacity = '0';
    clone.style.transform = 'scale(0.8)';
    clone.style.transition = 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    container.appendChild(clone);
    const itemWidth = firstChild.getBoundingClientRect().width;
    const gap = parseInt(window.getComputedStyle(container).gap) || 30;
    const shift = itemWidth + gap;
    firstChild.style.transition = 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    container.offsetHeight;
    firstChild.style.opacity = '0';
    firstChild.style.transform = 'scale(0.8)';
    clone.style.opacity = '1';
    clone.style.transform = 'scale(1)';
    container.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    container.style.transform = `translateX(-${shift}px)`;
    const onTransitionEnd = (e) => {
      if (e.target !== container || e.propertyName !== 'transform') return;
      container.removeEventListener('transitionend', onTransitionEnd);
      container.style.transition = 'none';
      container.style.transform = 'translateX(0)';
      firstChild.remove();
      clone.style.transition = '';
      clone.style.transform = '';
      clone.style.opacity = '';
      setTimeout(() => {
        isAnimating = false;
      }, 50);
    };
    container.addEventListener('transitionend', onTransitionEnd);
  });
});