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