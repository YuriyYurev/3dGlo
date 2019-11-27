const calc = (price = 100) => {
  const clacBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcDay = document.querySelector('.calc-day'),
      calcCount = document.querySelector('.calc-count'),
      totalValue = document.getElementById('total');
  const countSum = () => {
    let total = 0,
        countValue = 1,
        dayValue = 1,
        count = 0;
    const typeValue = calcType.options[calcType.selectedIndex].value,
          squareValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    } 

    if (typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
      total = Math.floor(total);
    } else {
      total = 0;
    }

    let time = setInterval(() => {
      if (count < total && total < 1000) {
        count += 10;
        totalValue.textContent = count;
      } else if (count < total && total < 10000) {
        count += 100;
        totalValue.textContent = count;
      } else if (count < total && total < 100000) {
        count += 1000;
        totalValue.textContent = count;
      } else if (count < total) {
        count += 10000;
        totalValue.textContent = count;
      } else {
        clearInterval(time);
        totalValue.textContent = total;
      }
    }, 1);
  };

  clacBlock.addEventListener('change', (event) => {
    const target = event.target;
    if (target.matches('select') || target.matches('input')) {
      countSum();
    }
  });
};

export default calc;