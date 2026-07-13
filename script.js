const character = document.querySelector(".character");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  // move character based on scroll
  const x = scroll * 0.3;

  character.style.transform = `translateX(${x}px)`;
});
