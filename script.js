const agreeLabel = document.getElementById("label-infos");
const agree = document.getElementById("agreement");
const submit = document.getElementById("submit-btn");
let counterDisplay = document.getElementById("counter");
let textarea = document.getElementsByClassName("textareaBox")[0];

submit.disabled = true;

function disabled() {

  console.log(submit.disabled)

  if (submit.disabled === true) {
    submit.disabled = false;
  }

  else if (submit.disabled === false){
    submit.disabled = true;
  }
}

function counter() {
  let textareaContent = textarea.value;
  let textareaContentLength = textareaContent.length;

  counterDisplay.innerHTML = 500 - textareaContentLength;

}

agree.addEventListener("click", disabled);
agreeLabel.addEventListener("click", disabled);
textarea.addEventListener("input", counter)

