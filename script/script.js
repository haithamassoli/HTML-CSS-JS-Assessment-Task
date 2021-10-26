const table = document.querySelector(".table");
const form = document.querySelector("form");
const welcome = document.querySelector(".welcome");

function validate() {}

function show_storage() {
  welcome.innerHTML = `welcome ${localStorage.getItem("username")}`;
}

form[0].addEventListener("blur", (e) => {
  localStorage.setItem("username", e.target.value);
});

fetch("../cup cakes.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.length);
    for (i = 0; i < data.length; i++) {
      let tabel = ` <tr>
    <td>${data[i].name}</td>
    <td class="${allColor(data[i])}">${data[i].calories}</td>
    <td>${data[i].weight}</td>
  </tr>`;
      table.insertAdjacentHTML("beforeend", tabel);
    }
  });

function allColor(data) {
  return data.calories == "high"
    ? "red"
    : data.calories == "low"
    ? "green"
    : data.calories == "medium"
    ? "orange"
    : "";
}
