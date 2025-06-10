import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const nouns = ["Orbit", "Pixel", "Nest", "Forge", "Pulse", "Vault"];
  const adjectives = ["Swift", "Bold", "Silent", "Bright", "Clever", "Epic"];
  const descriptions = ["Innovation", "Speed", "Design", "Power", "Simplicity", "Creativity"];
  const extensions = [".com", ".net", ".io", ".co", ".tech", ".org"];

  let webSites = () => {
    for (let i = 0; i < adjectives.length; i++) {
      let adj = adjectives[i];

      for (let j = 0; j < nouns.length; j++) {
        let noun = nouns[j];

        for (let k = 0; k < descriptions.length; k++) {
          let desc = descriptions[k];

          for (let l = 0; l < extensions.length; l++) {
            let ext = extensions[l];

            let siteName = `${adj}${noun}${desc}${ext}`;
            console.log(siteName);
          }
        }
      }
    }
  }


  webSites();
  console.log("Hello Rigo from the console!");
};
