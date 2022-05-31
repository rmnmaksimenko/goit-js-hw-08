import throttle from 'lodash.throttle';

formInput = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
const storageForm = {};

const savedData = localStorage.getItem(`${STORAGE_KEY}`);
if (savedData) {
  savedObject = JSON.parse(savedData);
  for (const key in savedObject) {
    formInput[key].value = storageForm[key] = savedObject[key];
  }
}

formInput.addEventListener('input', throttle(onTextAreaInput, 500));

formInput.addEventListener('submit', e => {
  e.preventDefault();
  console.log(storageForm);
  localStorage.removeItem(`${STORAGE_KEY}`);
  formInput.reset();
});

function onTextAreaInput(e) {
  storageForm[e.target.name] = e.target.value;
  JSONStorageForm = JSON.stringify(storageForm);
  localStorage.setItem(STORAGE_KEY, JSONStorageForm);
}
