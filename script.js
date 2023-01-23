const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {
  const nameFiled = document.getElementById("contactName");
  const emailFiled = document.getElementById("emailAddress");
  const messageFiled = document.getElementById("contactMessage");
  const errorText = document.getElementById("error-text");
  const submitSucess = document.getElementById("submit-sucess");
  const nameValue = nameFiled.value;
  const emailValue = emailFiled.value;
  const meassageValue = messageFiled.value;

  const templateParams = {
    nameValue: nameValue,
    emailValue: emailValue,
    meassageValue: meassageValue,
  };
  if (nameValue && emailValue && meassageValue) {
    nameFiled.value = "";
    emailFiled.value = "";
    messageFiled.value = "";
    errorText.innerHTML = "";
    submitSucess.innerHTML = "";
    submitSucess.innerHTML = `<p class= "text-success"<p> Submited sucessfully!`;
    console.log(nameValue, emailValue, meassageValue);
    emailjs.send(
      "service_jgtu7rj",
      "template_5uncqbu",
      templateParams,
      "I3HVIvZ7TowpJiSbo"
    );
  } else {
    errorText.innerHTML = `<p class = "text-danger"<p> Please fill in the correct  information!`;
  }
});

// Preloder
window.onload = function () {
  const preloderArea = document.getElementById("preloader-area");
  preloderArea.className = "page-loaded";

  setTimeout(function () {
    preloderArea.style.display = "none";
  }, 500);
};
