//creating a dropdown of the users names that has a value of the id 
    // delcare var of dom 

 let opt = document.createElement('option')


//toDo Display table task 
    //declare var of dom 
    let table = document.querySelector('table');
    let userName = document.getElementById('username');
    let userId = document.getElementById('userid');
    let complete = document.getElementById('completed');
        //creating a for loop to get through the array 
        for (let i = 0; i < data.length; i++) {

            userId.innerHTML =`${data[i].userid}`;
            complete.innerHTML = `${data[i].completed}`;
            table.innerHTML =`
                <tr>
                    <th>Category</th>
                    <th>Description</th>
                    <th>DeadLine</th>
                    <th>Priority</th>
                </tr>

                <tr>
                    <td>${data[i].category}</td>
                    <td>${data[i].description}</td>
                    <td>${data[i].deadline}</td>
                    <td>${data[i].priority}</td>
                </tr>
                          `;
            
        }



//newtoDo Display table new task 