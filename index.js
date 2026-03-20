// Odds and Events (workshop)
// index.html is NOT modified. everything is made here.
console.log("WORKING NOW");
console.log("JS LOADED ✅");
let bank = [];
let odds = [];
let evens = [];

function render() {
  const app = document.querySelector("#app");
  app.innerHTML = "";

  // title
  const h1 = document.createElement("h1");
  h1.textContent = "Odds and Events";
  app.appendChild(h1);

  // ---- controls row ----
  const controls = document.createElement("div");
  controls.style.marginBottom = "16px";

  const txt = document.createElement("span");
  txt.textContent = "Add a number to the bank ";
  controls.appendChild(txt);

  const input = document.createElement("input");
  input.type = "number";
  input.style.marginRight = "8px";
  input.style.width = "140px";
  controls.appendChild(input);

  const btnAdd = document.createElement("button");
  btnAdd.textContent = "Add number";
  btnAdd.style.marginRight = "6px";
  btnAdd.onclick = function () {
    if (input.value === "") return;

    const num = Number(input.value);
    if (Number.isNaN(num)) return;

    bank.push(num);
    input.value = "";
    render();
  };
  controls.appendChild(btnAdd);

  const btnSort1 = document.createElement("button");
  btnSort1.textContent = "Sort 1";
  btnSort1.style.marginRight = "6px";
  btnSort1.onclick = function () {
    sortOne();
    render();
  };
  controls.appendChild(btnSort1);

  const btnSortAll = document.createElement("button");
  btnSortAll.textContent = "Sort All";
  btnSortAll.onclick = function () {
    sortAll();
    render();
  };
  controls.appendChild(btnSortAll);

  app.appendChild(controls);

  // ---- sections ----
  app.appendChild(makeSection("Bank", bank));
  app.appendChild(makeSection("Odds", odds));
  app.appendChild(makeSection("Evens", evens));
}

function sortOne() {
  if (bank.length === 0) return;

  const first = bank.shift();
  if (first % 2 === 0) evens.push(first);
  else odds.push(first);
}

function sortAll() {
  while (bank.length > 0) {
    sortOne();
  }
}

function makeSection(title, arr) {
  const section = document.createElement("section");

  const h2 = document.createElement("h2");
  h2.textContent = title;
  section.appendChild(h2);

  // box like the screenshot
  const box = document.createElement("div");
  box.style.border = "2px solid #444";
  box.style.borderRadius = "8px";
  box.style.padding = "10px";
  box.style.minHeight = "22px";
  box.style.marginBottom = "18px";

  box.textContent = arr.join(" ");
  section.appendChild(box);

  return section;
}

render();
console.log("JS LOADED ✅");
