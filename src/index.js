import "./style.css";
import { homePage } from "./home-page";

const homeButton = document.querySelector("button:first-child");
homeButton.textContent = "Home";
const menuButton = document.querySelector("button:nth-child(2)");
menuButton.textContent = "Menu";
const aboutButton = document.querySelector("button:last-child");
aboutButton.textContent = "About";

homePage();

homeButton.addEventListener("click", homePage);
menuButton.addEventListener("click", menuPage);
aboutButton.addEventListener("click", aboutPage);
