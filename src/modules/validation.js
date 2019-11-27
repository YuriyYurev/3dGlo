const validation = () => {
  const calcBlock = document.querySelector('.calc-block'),
        command = document.getElementById('command');
  
  command.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('command__photo')) {
      e.target.setAttribute('src', e.target.dataset.img);
    }
  });
  command.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('command__photo')) {
      (e.target.setAttribute('src', (e.target.getAttribute('src')).replace(/a.jpg/, '.jpg')));
    }
  });

  const validNum = () => {
    let valueCalc = calcBlock.querySelectorAll('input');
    valueCalc.forEach(item => item.value = item.value.replace(/\D/gi, ''));
  };

  calcBlock.addEventListener('input', () => {
    validNum();
  });
};

export default validation;