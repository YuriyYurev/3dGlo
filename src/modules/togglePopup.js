const togglePopup = () => {
  const popUp = document.querySelector('.popup'),
        popUpBtn = document.querySelectorAll('.popup-btn'),
        popUpContent = document.querySelector('.popup-content');
  
  let count = 600;
  function animate1() {
    let animate = requestAnimationFrame(animate1);
    if (screen.availWidth < 768) {
      cancelAnimationFrame(animate);
      return;
    }
    popUpContent.style.top = count + 'px';
    popUpContent.style.opacity = 0.2;
    count -= 20;
    if(count < 100) {
      cancelAnimationFrame(animate);
      popUpContent.style.transition = 'opacity 0.2s linear';
      popUpContent.style.opacity = 1;
      count = 600;
    }
  }
  popUpBtn.forEach(item => {
    item.addEventListener('click', () => {
      popUp.style.display = 'block';
      animate1();
    });
  });

  popUp.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popUp.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popUp.style.display = 'none';
      }  
    }
  });
};

export default togglePopup;