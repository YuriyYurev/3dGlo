const scrollingAnchor = () => {
  const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchorItem of anchors) {
    if (anchorItem.classList.contains('close-btn')) {
      continue;
    }
    anchorItem.addEventListener('click', (event) => {
      event.preventDefault();
      let pars = anchorItem.getAttribute('href');
      document.querySelector('' + pars).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
};

export default scrollingAnchor;