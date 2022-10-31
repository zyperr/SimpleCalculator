const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "=") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "=") {
      display.innerText = "Null";
      setTimeout(() => (display.innerText = ""), 1500);
    } else {
      display.innerText += item.id;
    }
  });
});
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const togglerIcon = document.querySelector(".toggler-icon");
const iconMediaGitHub = document.querySelector("#gitHub");
const iconMediaInstagram = document.querySelector("#instagram");
const iconMediaDiscord = document.querySelector("#discord");


themeToggleBtn.addEventListener("click", () => {
  calculator.classList.toggle("dark-mode");
  themeToggleBtn.classList.toggle("active");

  iconMediaDiscord.classList.toggle('active');
  iconMediaInstagram.classList.toggle('active');
  iconMediaGitHub.classList.toggle('active');

  if (calculator.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "true");
    localStorage.setItem("toggleBtn", "false");
  } else {
    localStorage.setItem("dark-mode", "false");
    localStorage.setItem("toggleBtn", "true");
  }
  if(iconMediaDiscord.classList.contains('active') || iconMediaInstagram.classList.contains('active') || iconMediaGitHub.classList.contains('active')){
    localStorage.setItem('socialMedia' ,'true');
  }else{
    localStorage.setItem('socialMedia','false')
  }
});

if (localStorage.getItem("dark-mode") === "true") {
  calculator.classList.add("dark-mode");
  themeToggleBtn.classList.remove("active");
} else {
  calculator.classList.remove("dark-mode");
  themeToggleBtn.classList.add("active");
}

if(localStorage.getItem('socialMedia') === 'true'){
    iconMediaDiscord.classList.add('active');
    iconMediaInstagram.classList.add('active');
    iconMediaGitHub.classList.add('active');
}else{
    iconMediaDiscord.classList.remove('active');
    iconMediaInstagram.classList.remove('active');
    iconMediaGitHub.classList.remove('active');
}