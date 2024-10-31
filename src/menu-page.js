import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

export function menuPage() {
  const content = document.querySelector("#content");
  content.textContent = "";
  content.className = "menuPage";

  document.querySelector("nav > button:first-child").className = "homeBgColor";
  document.querySelector("nav > button:last-child").className = "aboutBgColor";

  const menuButton = document.querySelector("button:nth-child(2)");
  menuButton.className = "menuButton";

  const menuTitle = document.createElement("p");
  menuTitle.textContent = "Menu: ";
  menuTitle.className = "menuTitle";

  const menuDiv = document.createElement("div");
  menuDiv.className = "menuDiv";
  const menuList = document.createElement("ul");
  menuList.className = "menuList";
  for (let i = 0; i < 9; i++) {
    menuList.appendChild(Object.assign(document.createElement("li")), {
      textContent: `${lorem.generateWords(Math.floor(Math.random() * 4) + 1)}`,
    });
  }

  content.appendChild(menuTitle);
  content.appendChild(menuDiv);
}
