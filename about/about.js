const signUp = document.getElementById("signUp");
const emailBackground = document.getElementById("emailBackground");
const closeEmailWindow = document.getElementById("closeEmailWindow");
const submit = document.getElementById("submit");

signUp.onclick = () => {
  emailBackground.classList.remove("hidden");
};

signUp.onmouseover = () => {
  signUp.classList.add("hover");
};

closeEmailWindow.onclick = () => {
  emailBackground.classList.add("hidden");
};

submit.onclick = () => {
  emailBackground.classList.add("hidden");
};
