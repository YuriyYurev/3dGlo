const toggleMenu = () => {
  const menu = document.querySelector('menu');
  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };

  document.body.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('.close-btn') || target.closest('menu li') || target.closest('.menu')) {
      handlerMenu();
    } else if (!target.closest('.active-menu')) {
      menu.classList.remove('active-menu');
    }
  });
};

export default toggleMenu;