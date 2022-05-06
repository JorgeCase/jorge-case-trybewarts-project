const agreeLabel = document.getElementById('label-infos');
const agree = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
const counterDisplay = document.getElementById('counter');
const textarea = document.getElementsByClassName('textareaBox')[0];

submit.disabled = true;

function disabled() {
  console.log(submit.disabled);

  if (submit.disabled === true) {
    submit.disabled = false;
  } else if (submit.disabled === false) {
    submit.disabled = true;
  }
}

function counter() {
  const textareaContent = textarea.value;
  const textareaContentLength = textareaContent.length;

  counterDisplay.innerHTML = 500 - textareaContentLength;
}

agree.addEventListener('click', disabled);
agreeLabel.addEventListener('click', disabled);
textarea.addEventListener('input', counter);

function valueInputs() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const clickButton = document.getElementById('enter');

  clickButton.addEventListener('click', () => {
    if (
      emailInput.value === 'tryber@teste.com'
      && passwordInput.value === '123456'
    ) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
valueInputs();
