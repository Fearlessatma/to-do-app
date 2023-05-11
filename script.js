//getting the elemnents by id
const inputBox = document.getElementById("input-box");
const list=document.getElementById("list_conatainer");
const task=document.querySelector(".task");
var count=0;

//function for adding a task in the input box
function AddTask(){
    if(inputBox.value===''){
        alert("write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        count+=1;
        document.getElementById('count').innerHTML="There are " +count +" task";
        let span=document.createElement("span");
        span.innerHTML="\u00d7"         // to crete a x mark
        li.appendChild(span);
    }
    inputBox.value="";      //empty the input box after adding task
    saveData();         // to save the data in the browser
}

// marking the task as cheked and removing it
list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        count-=1;
        document.getElementById('count').innerHTML="There are " +count +" task";
        saveData()
    
    }
},false);


// function to save the data
function saveData(){
    localStorage.setItem("data",list.innerHTML);
}


//function to display the data
function displayList(){
    list.innerHTML=localStorage.getItem("data");
    document.getElementById('count').innerHTML="There are " +count +" task";
}
displayList();

