import { loadPage } from "./page-load.js";
import { createTabs } from "./apply-tabs.js";

const mainContainer = document.getElementById("content");
const head = document.getElementsByTagName("head")[0];
const w3css = document.createElement("link");
const fontAwesome = document.createElement("link");

mainContainer.style.textAlign = "center";
document.body.style.color = "white";
document.body.style.backgroundColor = "#151515";
w3css.rel = "stylesheet";
w3css.href = "./styles/w3.css";
head.appendChild(w3css);

createTabs(mainContainer);

loadPage(mainContainer);
