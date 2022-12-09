console.log("test");
let selectname = document.querySelector("select");
function fetchData() {
  fetch("http://localhost:8083/api/users")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        console.log(data);

        let opt = document.createElement("option");
        opt.innerHTML = `${data[i].name}`;
        opt.value = data[i].id;
        console.log(opt);
        selectname.appendChild(opt);
      }
    });
}
fetchData();
// add eventlistener to selectName
selectname.addEventListener("change", getTask);
// define a function that fetch data from endpoint

function getTask() {
  fetch("http://localhost:8083/api/todos")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}
