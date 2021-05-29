
const form = document.querySelector('.bot__form form');

const db = {
  'как дела?': 'У меня все отлично! У Вас как?',
  'как тебя зовут?': 'Меня зовут Максим. А вас?',
  'сколько тебе лет?': 10,
  'привет': 'Здравствуйте!',
  'расскажи о себе': 'Я - один из первых проектов Павла Кожанова! Я знаю, что он очень старался, делая меня!',
};

const botAnswer = document.querySelector('#bot_answer');

form.addEventListener('submit', e => {

    e.preventDefault();

    const value = e.target.bottext.value.toLowerCase();

    if (value.toLowerCase()) {
      const answer = db[value];
      if (answer !== undefined) {
      botAnswer.innerText = answer;
      } else {
      botAnswer.innerText = 'Я не знаю!';
      };
    };

});

document.querySelector('.themetoggle').addEventListener('click', e => {
  e.preventDefault();

  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  };

  addDarkTheme();

});

function addDarkTheme() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
      document.querySelector('.bot').classList.add('dark-bot')
      document.querySelector('#head').classList.add('dark-head');
      document.querySelector('.bot__top').classList.add('dark-bot-top');
      document.querySelector('.themetoggle').classList.add('dark-themetoggle');
      document.querySelector('.themetoggle span').textContent = 'dark_mode';
    } else {
      document.querySelector('body').classList.remove('dark');
      document.querySelector('.bot').classList.remove('dark-bot')
      document.querySelector('#head').classList.remove('dark-head');
      document.querySelector('.bot__top').classList.remove('dark-bot-top');
      document.querySelector('.themetoggle').classList.remove('dark-themetoggle');
      document.querySelector('.themetoggle span').textContent = 'wb_sunny';
    }
  } catch (err) {};
};

addDarkTheme();