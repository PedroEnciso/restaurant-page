import { loadHomePage } from "./home";
import loadMenuPage from "./menu";

/*
loadHomePage();

let home = document.getElementById("home");
let menu = document.getElementById("menu");
let contact = document.getElementById("contact");
*/
const clickHome = () => {
  loadHomePage();
  home = document.getElementById("home");
  menu = document.getElementById("menu");
  contact = document.getElementById("contact");

  menu.classList.remove("active");
  contact.classList.remove("active");
  home.classList.add("active");

  menu.addEventListener("click", clickMenu);
};

const clickMenu = () => {
  loadMenuPage();

  home = document.getElementById("home");
  menu = document.getElementById("menu");
  contact = document.getElementById("contact");

  home.classList.remove("active");
  contact.classList.remove("active");
  menu.classList.add("active");

  home.addEventListener("click", clickHome);
};

home.addEventListener("click", clickHome);
menu.addEventListener("click", clickMenu);
