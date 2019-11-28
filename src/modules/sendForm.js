import maskPhone from '../plugins/maskPhone';

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
  const readySend = './images/send.png',
        preloader = './images/preloader.gif',
        errorSend = './images/error-send.png';
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

export default sendForm;