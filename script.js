const agreeLabel = document.getElementById('label-infos');
const agree = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
const counterDisplay = document.getElementById('counter');
const textarea = document.getElementsByClassName('textareaBox')[0];
const family = document.querySelectorAll('.family');
const house = document.querySelector('#house');
const subject = document.querySelectorAll('.subject');
const nota = document.querySelectorAll('.nota');
const main = document.querySelector('.container');
const form = document.querySelector('#evaluation-form');
const image = document.getElementById('trybewarts-forms-logo');

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

function removeSelected() {
  for (let index = 0; index < family.length; index += 1) {
    family[index].classList.remove('selectedFamily');
  }
}
function removeSelectedNota() {
  for (let index = 0; index < nota.length; index += 1) {
    nota[index].classList.remove('selectedNota');
  }
}

function selectFamilyHouse() {
  for (let index = 0; index < family.length; index += 1) {
    family[index].addEventListener('click', (event) => {
      removeSelected();
      event.target.classList.add('selectedFamily');
    });
  }
}
selectFamilyHouse();

function selectNotas() {
  for (let index = 0; index < nota.length; index += 1) {
    nota[index].addEventListener('click', (event) => {
      removeSelectedNota();
      event.target.classList.add('selectedNota');
    });
  }
}
selectNotas();

function selectSubjects() {
  for (let index = 0; index < subject.length; index += 1) {
    subject[index].addEventListener('click', (event) => {
      event.target.classList.toggle('selectedSubject');
    });
  }
  house.addEventListener('change', () => {
    console.log(house.options[house.selectedIndex].text);
  });
}
selectSubjects();

function submitFunction() {
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const email = document.getElementById('input-email');
  const familia = document.querySelector('.selectedFamily');
  const casa = house.options[house.selectedIndex].text;
  const notas = document.querySelector('.selectedNota');
  const subjects = document.querySelectorAll('.selectedSubject');
  const comentario = document.querySelector('.textareaBox');
  const nomeText = document.createElement('h2');
  nomeText.innerHTML = `Nome: ${name.value} ${lastName.value}`;
  const emailText = document.createElement('h2');
  emailText.innerHTML = `Email: ${email.value}`;
  const familiaText = document.createElement('h2');
  familiaText.innerHTML = `Família: ${familia.value}`;
  const casaText = document.createElement('h2');
  casaText.innerHTML = `Casa: ${casa}`;
  const notaText = document.createElement('h2');
  notaText.innerHTML = `Avaliação: ${notas.value}`;
  const subjectText = document.createElement('h2');
  subjectText.innerHTML = 'Matérias: ';
  for (let index = 0; index < subjects.length; index += 1) {
    subjectText.innerHTML += `${subjects[index].value}, `;
  }
  const comentarioText = document.createElement('h2');
  comentarioText.innerHTML = `Observações: ${comentario.value}`;

  form.remove();
  const newForm = document.createElement('form');
  newForm.setAttribute('id', 'evaluation-form');
  main.appendChild(newForm);
  image.remove();
  newForm.append(nomeText);
  newForm.append(emailText);
  newForm.append(casaText);
  newForm.append(familiaText);
  newForm.append(subjectText);
  newForm.append(notaText);
  newForm.append(comentarioText);
  newForm.style.flexDirection = 'column';
}
submit.addEventListener('click', submitFunction);
