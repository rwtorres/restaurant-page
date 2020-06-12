function createTabButton(name, bar) {
  const newButton = document.createElement("button");

  newButton.className = "w3-bar-item w3-button";
  newButton.onclick = () => openTab(name);
  newButton.textContent = name[0].toUpperCase() + name.slice(1);
  bar.appendChild(newButton);
}

function createTabs(container) {
  const tabBar = document.createElement("div");

  tabBar.className = "w3-bar w3-black";
  tabBar.style.position = "sticky";
  tabBar.style.top = "0";

  createTabButton("home", tabBar);
  createTabButton("menu", tabBar);
  createTabButton("about", tabBar);
  createTabButton("contact", tabBar);

  container.appendChild(tabBar);
}

function openTab(name) {
  const options = document.getElementsByClassName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].style.display = "none";
  }
  document.getElementById(name).style.display = "block";
  window.scrollTo(0, 0);
}

export {createTabs};
