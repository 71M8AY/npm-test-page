export function homePage() {
  const content = document.querySelector("#content");
  content.textContent = "";
  content.className = "homePage";

  document.querySelector("nav > button:nth-child(2)").className = "menuBgColor";
  document.querySelector("nav > button:last-child").className = "aboutBgColor";

  const homeButton = document.querySelector("button:first-child");
  homeButton.className = "homeButton";

  const mainTitle = document.createElement("p");
  mainTitle.textContent = "Tim's Steak House";
  mainTitle.className = "mainTitle";

  const mainImgDiv = document.createElement("div");
  mainImgDiv.className = "imgDiv";

  const mainWelcomeDiv = document.createElement("div");
  mainWelcomeDiv.className = "welcomeDiv";
  mainWelcomeDiv.appendChild(
    Object.assign(document.createElement("p"), {
      textContent:
        "Welcome to Tim's Steak House, we have a great selection of steaks of any kind, drinks, condements, and even -gasp- salads.",
    })
  );
  mainWelcomeDiv.appendChild(
    Object.assign(document.createElement("p"), {
      textContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat nisl eget maximus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien quis odio semper euismod a quis ipsum. Nunc sed tortor dignissim, interdum ligula nec, pharetra nunc. Nam molestie mauris vel ultricies feugiat. Fusce dignissim, ipsum porttitor feugiat elementum, ante lorem tincidunt tellus, ut convallis erat est et nisi. Integer dignissim, metus eu efficitur blandit, est enim lobortis leo, aliquet elementum ligula diam ac sem. Curabitur convallis arcu id nisl interdum, ut faucibus elit egestas. In hac habitasse platea dictumst.",
    })
  );

  mainWelcomeDiv.appendChild(
    Object.assign(document.createElement("p"), {
      textContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat nisl eget maximus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien quis odio semper euismod a quis ipsum. Nunc sed tortor dignissim, interdum ligula nec, pharetra nunc. Nam molestie mauris vel ultricies feugiat. Fusce dignissim, ipsum porttitor feugiat elementum, ante lorem tincidunt tellus, ut convallis erat est et nisi. Integer dignissim, metus eu efficitur blandit, est enim lobortis leo, aliquet elementum ligula diam ac sem. Curabitur convallis arcu id nisl interdum, ut faucibus elit egestas. In hac habitasse platea dictumst.",
    })
  );

  content.appendChild(mainTitle);
  content.appendChild(mainImgDiv);
  content.appendChild(mainWelcomeDiv);
}
