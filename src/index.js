const $ = (p) => document.querySelector(p);

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  $('.cam-info-translate').style.transform = `translateY(${scrolled * -0.1}px)`;
  $('.guy-translate').style.transform = `translateY(${scrolled * -0.14}px)`;
  $('.hero-translate').style.transform = `translateY(${scrolled * .2}px)`;
});
