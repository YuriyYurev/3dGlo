window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  //Timer
  const countTimer = (deadline) => {
    let timeHours = document.querySelector('#timer-hours'),
        timeMinutes = document.querySelector('#timer-minutes'),
        timeSeconds = document.querySelector('#timer-seconds');
        
        const checkTenTime = (parseTime , targetTime) => { 
          if (targetTime < 0) {
            return (parseTime = '00');
          } else if (parseTime < 10) {
            return (parseTime = '0' + parseInt(parseTime));
          } else {
            return parseTime;
          }
        };
       
        const getTimeRemaining = () => {
          let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining, hours, minutes, seconds};
        };

        const updateClock = () => {
          let interval = setInterval(function() {
            let timer = getTimeRemaining();
            timeHours.textContent = checkTenTime(timer.hours, timer.timeRemaining);
            timeMinutes.textContent = checkTenTime(timer.minutes, timer.timeRemaining);
            timeSeconds.textContent = checkTenTime(timer.seconds, timer.timeRemaining);
            if (timer.timeRemaining < 0) {
              clearInterval(interval);
            }
          }, 1000);
        };

        updateClock();
  };
  countTimer('26 november 2019');

  //scroll
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

  scrollingAnchor();
  //Menu
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
  toggleMenu();

  //popup
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
  togglePopup();

  //Tabs
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for(let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };   
    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.service-header-tab');
      
        if (target) {
          tab.forEach((item, i) => {
            if(item === target) {
              toggleTabContent(i);
            }
          });
        } 
    });
  };
  tabs();

  //Slider
  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
          slider = document.querySelector('.portfolio-content'),
          listDot = document.querySelector('.portfolio-dots');

          const createDots = (elem) => {
            for (let i = 0; i < elem.length; i ++) {
            let dot = document.createElement('li');
            dot.classList.add('dot');
            listDot.appendChild(dot);
            }
          };

    createDots(slide);

    let currentSlide = 0,
        dot = document.querySelectorAll('.dot'),
        interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };
    
    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault();

      let target = event.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }

      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });
    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.portfolio-btn') ||
      event.target.matches('.dot')) {
        stopSlide();
      }
    });
  
    slider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.portfolio-btn') ||
      event.target.matches('.dot')) {
        startSlide();
      }
    });

    startSlide(1500);
  };
  slider();

  //Validation
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
  validation();

  //Calculate
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

  calc(100);

  //send-ajax-form

  const sendForm = () => {

    let inp = document.querySelectorAll('input');

    inp.forEach(item => {
      if (item.name === 'user_phone') {
        maskPhone(('#' + item.id), '+7__________');
      }
      if (item.name === 'user_name' || item.name === 'user_message') {
        item.addEventListener('input', () => {
          item.value = item.value.replace(/\w/gi, '');
        });
      }
    });
    const readySend = '../images/send.png',
          preloader = '../images/preloader.gif',
          errorSend = '../images/error-send.png';
    const formOne = document.getElementById('form1'),
      formTwo = document.getElementById('form2'),
      formThree = document.getElementById('form3');
    const statusImg = document.createElement('img');
    statusImg.style.maxWidth = '40px';

    
    const resData = (form) => {
      form.addEventListener('submit', (event) => {
      event.preventDefault();
      statusImg.src = preloader;
      form.appendChild(statusImg);
      const formData = new FormData(form);
      let body = {};
      form.reset();
        formData.forEach((val, key) => {
          body[key] = val;
          console.log(val);
        });
      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200.');
          }
          statusImg.src = readySend;
        })
        .catch(error => {
          console.error(error);
          statusImg.src = errorSend;
        });
      });
      };

    resData(formOne);
    resData(formTwo);
    resData(formThree);

    const postData = (body) => {
      return fetch('./server.php', {
        method: 'POST',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        referrer: 'client',
        body: JSON.stringify(body)
      });
    };
  };
  sendForm();
});

