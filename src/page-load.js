function loadPage(container) {
  loadHome(container);
  loadMenu(container);
  loadAbout(container);
  loadContact(container);
}

function loadHome(container) {
  const home = document.createElement("div");
  const headline = document.createElement("h1");
  const insides = document.createElement("img");
  const description = document.createElement("p");

  home.id = "home";
  home.className = "option";
  home.style.display = "block";

  headline.id = "headline";
  headline.textContent = "Cantina Latina Magnificat";

  insides.id = "insides";
  insides.src = "./images/insides.jpeg";
  insides.alt = "insides";
  insides.style.width = "90%";

  description.id = "description";
  description.textContent = "Lorem ipsum dolor sit amet, consectetur " +
    "adipiscing elit. Donec gravida magna nulla, vitae condimentum magna " +
    "posuere id. Maecenas ornare, mi eu sodales placerat, enim ex fermentum " +
    "est, nec pharetra mauris risus sit amet orci. Mauris et tortor et ipsum " +
    "varius tempor. In feugiat orci tellus, cursus euismod lacus dictum vel. " +
    "Sed at convallis diam. Proin pretium ante vitae velit maximus accumsan. " +
    "Proin et ante hendrerit, laoreet sem ut, hendrerit tortor.";

  home.appendChild(headline);
  home.appendChild(insides);
  home.appendChild(description);
  container.appendChild(home);
}

function makeFood(catalog, source, name) {
  const food = document.createElement("img");
  const description = document.createElement("h2");

  food.src = source;
  food.style.width = "80%";
  description.textContent = name;
  description.style.paddingBottom = "10%";
  catalog.appendChild(food);
  catalog.appendChild(description);
}


function loadMenu(container) {
  const menu = document.createElement("div");
  const headline = document.createElement("h1");

  menu.id = "menu";
  menu.className = "option";
  menu.style.display = "none";

  headline.id = "headline";
  headline.textContent = "Menu";

  menu.appendChild(headline);
  makeFood(menu, "./images/beef-steak.jpeg", "Beef Steak");
  makeFood(menu, "./images/aspargus-barbecue.jpeg", "Aspargus Barbecue");
  makeFood(menu, "./images/potato-cepelinai.jpeg", "Potato Cepelinai");
  makeFood(menu, "./images/vegetarian-salad.jpeg", "Vegetarian Salad");
  container.appendChild(menu);
}

function loadAbout(container) {
  const about = document.createElement("div");
  const headline = document.createElement("h1");
  const insides = document.createElement("img");
  const description = document.createElement("p");

  about.id = "about";
  about.className = "option";
  about.style.display = "none";

  headline.id = "headline";
  headline.textContent = "About Us";

  insides.id = "insides";
  insides.src = "./images/service.jpeg";
  insides.alt = "insides";
  insides.style.width = "90%";

  description.id = "description";
  description.textContent = "Ut pellentesque est quis nunc tempor ullamcorper."+
    " Nullam magna justo, maximus ultrices bibendum non, posuere nec nisl." +
    " Maecenas nunc nibh, tempor vitae viverra non, convallis in lacus." +
    " Maecenas dapibus lacus ut ipsum vehicula elementum. Curabitur eget sem " +
    "mauris. Curabitur efficitur quam eu sagittis condimentum. Etiam tincidunt"+
    " arcu ac sem commodo, ullamcorper mollis justo lacinia. Sed dignissim" +
    " auctor magna." +
    "Quisque ultricies sed mauris vel posuere. Curabitur at sapien a arcu " +
    "scelerisque facilisis at eu mauris. Suspendisse fringilla, nunc eget " +
    "vulputate fermentum, nibh justo consequat turpis, quis efficitur libero " +
    "diam non nulla. Proin ac elementum magna. Praesent et nibh interdum, " +
    "laoreet velit eget, placerat lacus. Integer sed massa sit amet lorem " +
    "sodales cursus at sed ipsum. Vestibulum ante ipsum primis in faucibus " +
    "orci luctus et ultrices posuere cubilia curae; Etiam eleifend, metus et " +
    "iaculis luctus, lectus risus ultricies justo, vulputate fermentum quam " +
    "dolor vel orci. Fusce et libero turpis. Sed vel ullamcorper Donec quis " +
    "dapibus diam. Curabitur eu lacus posuere, venenatis tortor eget, " +
    "hendrerit arcu. ";

  about.appendChild(headline);
  about.appendChild(insides);
  about.appendChild(description);
  container.appendChild(about);
}

function loadContact(container) {
  const contact = document.createElement("div");
  const headline = document.createElement("h1");
  const whatsapp = document.createElement("p");
  const instagram = document.createElement("p");

  contact.id = "contact";
  contact.className = "option";
  contact.style.display = "none";

  headline.id = "headline";
  headline.textContent = "Contact";

  whatsapp.textContent = "Whatsapp: +55 11 96546-3213";
  instagram.textContent = "Instagram: @CantinaLatinaMagnificat";

  contact.appendChild(headline);
  contact.appendChild(whatsapp);
  contact.appendChild(instagram);
  container.appendChild(contact);
}

export { loadPage };
