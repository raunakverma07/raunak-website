function scrollToSection(){
  document.getElementById("cards").scrollIntoView({
    behavior: "smooth"
  });
}
function toggleTheme(){

  document.body.classList.toggle("light");

  const btn = document.querySelector(".theme-btn");

  if(document.body.classList.contains("light")){
    btn.innerHTML = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    btn.innerHTML = "🌙";
    localStorage.setItem("theme", "dark");
  }
}

/* Load saved theme */
window.onload = function(){
  const saved = localStorage.getItem("theme");

  if(saved === "light"){
    document.body.classList.add("light");
    document.querySelector(".theme-btn").innerHTML = "☀️";
  }
}
function toggleForm(){
  const form = document.querySelector(".feedback-form");

  if(form.style.display === "flex"){
    form.style.display = "none";
  } else {
    form.style.display = "flex";
  }
}

const form = document.querySelector(".feedback-form");

form.addEventListener("submit", function(e){

  const message = document.getElementById("message").value;
  const words = message.trim().split(/\s+/).length;

  if(words < 10){
    alert("Please write at least 10 words.");
    e.preventDefault();
  }

});


