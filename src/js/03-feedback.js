import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name="email"]');
const messageEl = document.querySelector('[name="message"]');

const KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onFormChange, 500));
formEl.addEventListener('submit', onFormSubmit);
saveDataForm();

function onFormChange() {
  const formData = {
    email: emailEl.value,
    message: messageEl.value,
  };
  localStorage.setItem(KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(KEY)));
  localStorage.removeItem(KEY);
}

function saveDataForm() {
  let savedData = JSON.parse(localStorage.getItem(KEY));
  if (savedData) {
    emailEl.value = savedData.email;
    messageEl.value = savedData.message;
  }
}
