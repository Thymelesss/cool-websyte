const signUp = document.getElementById("signUp");
const emailBackground = document.getElementById("emailBackground");
const closeEmailWindow = document.getElementById("closeEmailWindow");

signUp.onclick = () => {
  emailBackground.classList.remove("hidden");
};

closeEmailWindow.onclick = () => {
  emailBackground.classList.add("hidden");
};
