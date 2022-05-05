const agreeLabel = document.getElementById("label-infos");
const agree = document.getElementById("agreement");
const submit = document.getElementById("submit-btn");

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

agree.addEventListener("click", disabled);
agreeLabel.addEventListener("click", disabled);

