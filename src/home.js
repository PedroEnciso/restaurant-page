const loadHomePage = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const main = document.createElement("main");
  contentDiv.appendChild(main);

  createHeader(main);
  createHeroSection(main);
  createInfoSection(main);
  createPictureSection(main);
  createFooter(main);
};

const createHeader = (main) => {
  const header = document.createElement("header");
  main.appendChild(header);

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("container-header");
  header.appendChild(headerContainer);

  const h1 = document.createElement("h1");
  h1.innerHTML = "Restaurant Name";
  headerContainer.appendChild(h1);

  const nav = document.createElement("nav");
  headerContainer.appendChild(nav);

  const ul = document.createElement("ul");
  nav.appendChild(ul);

  const home = document.createElement("li");
  home.innerHTML = "home";
  home.classList.add("active");
  home.setAttribute("id", "home");
  ul.appendChild(home);

  const menu = document.createElement("li");
  menu.innerHTML = "menu";
  menu.setAttribute("id", "menu");
  ul.appendChild(menu);

  const contact = document.createElement("li");
  contact.innerHTML = "contact";
  contact.setAttribute("id", "contact");
  ul.appendChild(contact);
};

const createHeroSection = (main) => {
  const section = document.createElement("section");
  main.appendChild(section);
  section.classList.add("hero-section");

  const container = document.createElement("div");
  container.classList.add("container-hero");
  section.appendChild(container);

  const img = document.createElement("img");
  img.alt = "trendy street mural.";
  img.src = "./img/hero.jpg";
  container.appendChild(img);
};

const createInfoSection = (main) => {
  const section = document.createElement("section");
  main.appendChild(section);
  section.classList.add("restaurant-info-section");

  const container = document.createElement("div");
  container.classList.add("container-section");
  section.appendChild(container);

  const grid = document.createElement("div");
  grid.classList.add("grid");
  container.appendChild(grid);

  const left = document.createElement("div");
  left.classList.add("left");
  grid.appendChild(left);

  const tagline = document.createElement("h2");
  tagline.innerHTML =
    "My Restaurant, where we're serving plates and throwing shade.";
  left.appendChild(tagline);

  const para = document.createElement("p");
  para.innerHTML =
    "Come on down to My Restaurant, we serve authentic style food that is way overpriced. Thats OK because we are located in a newly gentrified area and white people don't sem to mind as long as we look trendy!";
  left.appendChild(para);

  const right = document.createElement("div");
  right.classList.add("right");
  grid.appendChild(right);

  const infoRow1 = document.createElement("div");
  infoRow1.classList.add("info-row");
  right.appendChild(infoRow1);

  const phone = document.createElement("h2");
  phone.innerHTML = "phone";
  infoRow1.appendChild(phone);

  const phoneNumber = document.createElement("p");
  phoneNumber.innerHTML = "(123) 456 - 789";
  infoRow1.appendChild(phoneNumber);

  const infoRow2 = document.createElement("div");
  infoRow2.classList.add("info-row");
  right.appendChild(infoRow2);

  const address = document.createElement("h2");
  address.innerHTML = "address";
  infoRow2.appendChild(address);

  const addressName = document.createElement("p");
  addressName.innerHTML = "some random address";
  infoRow2.appendChild(addressName);

  const infoRow = document.createElement("div");
  infoRow.classList.add("info-row");
  right.appendChild(infoRow);

  const hours = document.createElement("h2");
  hours.innerHTML = "hours";
  infoRow.appendChild(hours);

  const hoursDescription = document.createElement("p");
  hoursDescription.innerHTML = "MON-SAT: 6PM-9PM";
  infoRow.appendChild(hoursDescription);
};

const createPictureSection = (main) => {
  const section = document.createElement("section");
  main.appendChild(section);
  section.classList.add("picture-section");

  const container = document.createElement("div");
  container.classList.add("container-picture");
  section.appendChild(container);

  const img = document.createElement("img");
  img.alt = "trendy picture of shoes.";
  img.src = "./img/footer.jpg";
  container.appendChild(img);
};

const createFooter = (main) => {
  const footer = document.createElement("footer");
  main.appendChild(footer);

  const div = document.createElement("div");
  div.classList.add("container-footer");
  footer.appendChild(div);

  const address = document.createElement("p");
  address.innerHTML = "Some random street address";
  div.appendChild(address);

  const phone = document.createElement("p");
  phone.innerHTML = "(123) 456 - 789";
  div.appendChild(phone);

  const email = document.createElement("p");
  email.innerHTML = "contactus@email.com";
  div.appendChild(email);

  const copyright = document.createElement("p");
  copyright.classList.add("copyright");
  copyright.innerHTML = "&copy 2021 My Restaurant, branded by Pedro Enciso";
  div.appendChild(copyright);
};

export { loadHomePage, createHeader, createFooter };
