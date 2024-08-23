const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // add ' X ' button
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData() //whenever we add new task our new data along with prev data should be saved on server
}

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){            // for checking and unchecking the task
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){     // for deleting the task
        e.target.parentElement.remove();
        saveData();
    }
},false);

//function to save the data on the server
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//function to show the saved task on the browser
function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showtask();