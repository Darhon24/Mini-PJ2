//creating variables for later use
let dropDownData;
let tempData;

//creating variable for dropdowns
let userDropdown = document.getElementById('userSelect')


//creating endpoints
let userEndpoint = 'http://localhost:8083/api/users'

userDropdown.onclick = updateUserDropdown(userEndpoint)


function fetchData(endpoint) {
    fetch(endpoint)
    .then(promise => promise.json())
    .then(data => {
        console.log(data);
        tempData = data;
        console.log(tempData)

    })
}

function updateUserDropdown(endpoint) {
    fetchData(endpoint)
    dropDownData = tempData
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