//creating variables for later use
let userDropData;
let categoryDropData;
let formJSON;

//creating variable for dropdowns
let userDropdown = document.getElementById('userid')
let categoryDropdown = document.getElementById('category')
const form = document.getElementById('taskSubmition');


//creating endpoints
let userEndpoint = 'http://localhost:8083/api/users'
let categoryEndpoint = 'http://localhost:8083/api/categories'
let addToDoEndpoint = 'http://localhost:8083/api/todos'

window.onload = fetchUserData()
form.addEventListener('submit', getData);



function fetchUserData() {
    fetch(userEndpoint)
    .then(promise => promise.json())
    .then(data => {
        userDropData = data;
        updateUserDropdown()

    })
}

function fetchCategoryData() {
    fetch(categoryEndpoint)
    .then(promise => promise.json())
    .then(data => {
        categoryDropData = data;
        updateCategoryDropdown()

    })
}

function updateUserDropdown() {
    console.log('updateUserfunction')
    console.log(userDropData)
    
    
    for (let i = 0; i < userDropData.length; i++) {
        let opt = document.createElement('option');
        opt.innerHTML = `${userDropData[i].id}: ${userDropData[i].username}`
        opt.value = userDropData[i].id
        console.log(opt)
        userDropdown.appendChild(opt)
    }
    fetchCategoryData()
}

function updateCategoryDropdown() {
    console.log('updateCategoryfunction')
    console.log(categoryDropData)
    
    
    for (let i = 0; i < categoryDropData.length; i++) {
        let opt = document.createElement('option');
        opt.innerHTML = categoryDropData[i].name
        opt.value = categoryDropData[i].name
        console.log(opt)
        categoryDropdown.appendChild(opt)
    }
}

function getData(evt) {
    evt.preventDefault();
    const data = new FormData(evt.target);
    console.log(data.entries());
    formJSON = Object.fromEntries(data.entries());
    console.log(formJSON);
    sendData();
}

function sendData(){
    console.log(formJSON);
    fetch(addToDoEndpoint, {
        method: "POST",
        body: JSON.stringify(formJSON),
        headers: {"Content-type": "application/json; charset-UTF-8"}
    })
    // .then(response => response.JSON())
    // .then(json => {
    //     let confirmationmessage = document.querySelector('#confirmationMessage');
    //     confirmationmessage.innerHTML = 'New Goal Added';
    // })
    .catch(err => {
        console.error(err);
    })
}
