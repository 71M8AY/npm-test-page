import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

export function aboutPage() {
  const content = document.querySelector("#content");
  content.textContent = "";
  content.className = "aboutPage";

  document.querySelector("nav > button:first-child").className = "homeBgColor";
  document.querySelector("nav > button:nth-child(2)").className = "menuBgColor";

  const aboutButton = document.querySelector("button:last-child");
  aboutButton.className = "aboutButton";

  const aboutTitle = document.createElement("p");
  aboutTitle.textContent = "About Us: ";
  aboutTitle.className = "aboutTitle";

  const aboutDiv = document.createElement("div");
  aboutDiv.className = "aboutDiv";
  aboutDiv.textContent = `${lorem.generateParagraphs(5)}`;

  content.appendChild(aboutTitle);
  content.appendChild(aboutDiv);
}
