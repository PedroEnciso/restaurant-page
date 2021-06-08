import { createHeader, createFooter } from "./home";

const loadContactPage = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const main = document.createElement("main");
  contentDiv.appendChild(main);

  createHeader(main);
  createContactHeader(main);
  createContactSection(main);
  createFooter(main);
};

const createContactHeader = (main) => {
  const section = document.createElement("section");
  section.classList.add("menu-header");
  main.appendChild(section);

  const div = document.createElement("div");
  div.classList.add("menu-header-container");
  section.appendChild(div);

  const img = document.createElement("img");
  img.src = "./img/contact.jpg";
  img.alt = "An interesting pattern.";
  div.appendChild(img);

  const h2 = document.createElement("h2");
  h2.innerHTML = "Contact";
  div.appendChild(h2);
};

const createContactSection = (main) => {
  const section = document.createElement("section");
  section.classList.add("contact-section");
  main.appendChild(section);

  const div = document.createElement("div");
  div.classList.add("contact-section-container");
  section.appendChild(div);

  const grid = document.createElement("div");
  grid.classList.add("grid");
  div.appendChild(grid);

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");
  grid.appendChild(contactInfo);

  const h3 = document.createElement("h3");
  h3.innerHTML = "Get in touch with us.";
  contactInfo.appendChild(h3);

  const copy = document.createElement("p");
  copy.innerHTML =
    "Thanks for reaching out! We value your feedback, just give us a call or shoot us an email!";
  contactInfo.appendChild(copy);

  const infoLine1 = document.createElement("div");
  infoLine1.classList.add("info-line");
  contactInfo.appendChild(infoLine1);

  const phone = document.createElement("h4");
  phone.innerHTML = "phone";
  infoLine1.appendChild(phone);

  const phoneDetail = document.createElement("p");
  phoneDetail.innerHTML = "(123) 456 - 789";
  infoLine1.appendChild(phoneDetail);

  const infoLine2 = document.createElement("div");
  infoLine2.classList.add("info-line");
  contactInfo.appendChild(infoLine2);

  const email = document.createElement("h4");
  email.innerHTML = "email";
  infoLine2.appendChild(email);

  const emailDetail = document.createElement("p");
  emailDetail.innerHTML = "contactus@email.com";
  infoLine2.appendChild(emailDetail);

  const infoLine3 = document.createElement("div");
  infoLine3.classList.add("info-line");
  contactInfo.appendChild(infoLine3);

  const address = document.createElement("h4");
  address.innerHTML = "address";
  infoLine3.appendChild(address);

  const addressDetail = document.createElement("p");
  addressDetail.innerHTML = "some random address";
  infoLine3.appendChild(addressDetail);

  const contactImage = document.createElement("div");
  contactImage.classList.add("contact-image");
  grid.appendChild(contactImage);

  const img = document.createElement("img");
  img.src = "./img/logo.jpg";
  img.alt = "My restaurant's logo.";
  contactImage.appendChild(img);
};

export default loadContactPage;
