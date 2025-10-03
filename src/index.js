import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function init() {
  document.getElementById("homeBtn").addEventListener("click", loadHome);
  document.getElementById("menuBtn").addEventListener("click", loadMenu);
  document.getElementById("contactBtn").addEventListener("click", loadContact);

  // Load default tab
  loadHome();
}

init();

