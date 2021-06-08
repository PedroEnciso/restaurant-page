import { createHeader, createFooter } from "./home";

const loadMenuPage = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const main = document.createElement("main");
  contentDiv.appendChild(main);

  createHeader(main);
  createMenuHeader(main);
  createMenuSection(main);
  createFooter(main);
};

const createMenuHeader = (main) => {
  const section = document.createElement("section");
  section.classList.add("menu-header");
  main.appendChild(section);

  const div = document.createElement("div");
  div.classList.add("menu-header-container");
  section.appendChild(div);

  const img = document.createElement("img");
  img.src = "./img/menu.jpg";
  img.alt = "An aesthetic picture of clouds.";
  div.appendChild(img);

  const h2 = document.createElement("h2");
  h2.innerHTML = "Our Menu";
  div.appendChild(h2);
};

const createMenuSection = (main) => {
  const section = document.createElement("section");
  section.classList.add("menu-section");
  main.appendChild(section);

  const div = document.createElement("div");
  div.classList.add("menu-section-container");
  section.appendChild(div);

  const h2 = document.createElement("h2");
  h2.innerHTML = "food";
  div.appendChild(h2);

  const grid = document.createElement("div");
  grid.classList.add("grid");
  div.appendChild(grid);

  for (let i = 0; i < 6; i++) {
    const option = document.createElement("div");
    option.classList.add("option");
    grid.appendChild(option);

    const h3 = document.createElement("h3");
    h3.innerHTML = "tacos $7";
    option.appendChild(h3);

    const p = document.createElement("p");
    p.innerHTML =
      "Chicken, beef, or pork tacos with salsa and guac. Choose either flour or corn tortillas.";
    option.appendChild(p);
  }
};

export default loadMenuPage;
