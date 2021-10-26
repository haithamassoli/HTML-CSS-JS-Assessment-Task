const table = document.querySelector(".table");
const form = document.querySelector("form");
const welcome = document.querySelector(".welcome");
const btn = document.querySelector(".btn");
const error = document.querySelectorAll(".error");

function validate() {}

btn.addEventListener("click", () => {
  console.log(form[1].value);
  form[0].value == "" || form[0].value.length < 5 || form[0].value.length > 17
    ? (error[0].innerHTML =
        "The name is required and must be at least five characters long and at most 16 characters long")
    : (error[0].innerHTML = "");
  form[1].value == "" || form[1].value > 16 || form[1].value < 0
    ? (error[1].innerHTML =
        "The count is required and must be at least 1 and at most 15")
    : (error[1].innerHTML = "");
  form[2].value == "1"
    ? (error[2].innerHTML = "The user must choose a type")
    : (error[2].innerHTML = "");
  form[2].value == "2" && form[4].value == "2"
    ? (error[4].innerHTML = " this type of cake is not dairy free")
    : (error[4].innerHTML = "");
  form[2].value == "2" && form[3].value == "10"
    ? (error[3].innerHTML = "this type of cake cannot be delivered at 4 PM.")
    : (error[3].innerHTML = "");
});

function show_storage() {
  welcome.innerHTML = `welcome ${localStorage.getItem("username")}`;
}

form[0].addEventListener("blur", (e) => {
  localStorage.setItem("username", e.target.value);
});

fetch("https://raw.githubusercontent.com/haithamassoli/HTML-CSS-JS-Assessment-Task/main/cup%20cakes.json")
  .then((response) => response.json())
  .then((data) => {
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
