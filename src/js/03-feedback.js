import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
const storageForm = {};

const savedData = localStorage.getItem(`${STORAGE_KEY}`);
if (savedData) {
  savedObject = JSON.parse(savedData);
  for (const key in savedObject) {
    form[key].value = storageForm[key] = savedObject[key];
  }
}

form.addEventListener('input', throttle(onTextAreaInput, 500));

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(storageForm);
  localStorage.removeItem(`${STORAGE_KEY}`);
  form.reset();
  for (key in storageForm) {
    storageForm[key] = '';
  }
});

function onTextAreaInput(e) {
  storageForm[e.target.name] = e.target.value;
  JSONStorageForm = JSON.stringify(storageForm);
  localStorage.setItem(STORAGE_KEY, JSONStorageForm);
}
