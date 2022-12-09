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
    //declare var of dom 
    let table = document.querySelector("table");
    let usersName = document.getElementById("username");
    console.log(usersName);
    let userId = document.getElementById("userid");
    let complete = document.getElementById("completed");

function getTask() {
    complete.replaceChildren();
    userId.replaceChildren();
    table.replaceChildren();
    let selectname = document.querySelector("select").value;
    console.log(selectname)
  fetch(`http://localhost:8083/api/todos/byuser/${selectname}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      //toDo Display table task 

        //creating a for loop to get through the array 
        json.map((task) => {
            
            // usersName.innerHTML += `${task.user}`
            userId.innerHTML =`Users ID: ${task.userid}`;
            //Bonus  
                    if (task.completed === true) {
                        //completed is true than display the number of completed and also a check or smile face 
                    
                        complete.innerHTML = `Status: <img src="/images/planner.png" alt="Check" width="20px" class="check"> `
                    } else {
                              //else dislpay the not sign and say complete task 
                        complete.innerHTML = `Status: <img src="/images/forbidden.png" alt="No sign" width="20px" class="Nosign"> `
                    }
                  

            table.innerHTML +=`
                <tr>
                    <th>Category</th>
                    <th>Description</th>
                    <th>DeadLine</th>
                    <th>Priority</th>
                </tr>

                <tr>
                    <td>${task.category}</td>
                    <td>${task.description}</td>
                    <td>${task.deadline}</td>
                    <td>${task.priority}</td>
                </tr>
              
                      
                          `;
            
        })



    });
}


                