//creating variables for later use
let dropDownData;

//creating variable for dropdowns
let userDropdown = document.getElementById('userSelect')


//creating endpoints
let userEndpoint = 'http://localhost:8083/api/users'

window.onload = fetchData()


function fetchData() {
    fetch(userEndpoint)
    .then(promise => promise.json())
    .then(data => {
        dropDownData = data;
        updateUserDropdown()

    })
}

function updateUserDropdown() {
    console.log(dropDownData)
    console.log('updatefunction')
    console.log(dropDownData)
    
    
    for (let i = 0; i < dropDownData.length; i++) {
        let opt = document.createElement('option');
        opt.innerHTML = `${dropDownData[i].id}: ${dropDownData[i].username}`
        opt.value = dropDownData[i].id
        console.log(opt)
        userDropdown.appendChild(opt)
    }
}