import folio from "./folio.json";
import { formatDistanceToNow } from "date-fns";

console.log("My Birth:", folio.info.about.birth);

const hiEl = document.querySelector("h1");
hiEl.textContent += " It's " + folio.info.about.name + " " + folio.info.about.firstname;
const containerEl = document.getElementById("container");
containerEl.innerHTML =
  "<h2>" + formatDistanceToNow(new Date(folio.info.about.birth)) + " old</h2>";
containerEl.innerHTML += '<br><h2>Skills:</h2><ul class="skillsList"></ul>';
const skillEl = document.querySelector(".skillsList");
folio.info.competenceList.forEach((element) => {
  skillEl.innerHTML += "<li><h4>" + element.competencename + "</h4></li>";
});
