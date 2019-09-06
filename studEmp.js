let studThead = ["Roll No", "Name", "Email", "Phone Number"];
function createTable(tableArr){
    let headArr = tableArr;
    let tableId = document.createElement("table");
    tableId.setAttribute("id", "tableId");

    let tr = tableId.insertRow(-1);
    headArr.forEach(function(element) {
        let th = document.createElement("th");
        let button = document.createElement("BUTTON"); 
        th.innerHTML = element;
        button.setAttribute("class", "sortBtn");
        button.setAttribute("onclick", "sortRow(this)");
        button.innerHTML = "";
        tr.appendChild(th);
        tr.appendChild(button);
    });
    let div = document.getElementById("tableDisplay");
    div.appendChild(tableId);

}

function saveLocal(){
    
}
function addRow(tableArr){
    let headArr = tableArr;
    headArr.forEach(function(){
        let form = document.createElement("FORM");
        form.setAttribute("type", "text");
        document.getElementById("modalBody").appendChild(form);
        let input = document.createElement("INPUT");
        input.setAttribute("type", "text");
        form.appendChild(input);
    });
    let modal = document.getElementById("formModal");
    modal.style.display ="block";
    var span =document.getElementsByClassName("close")[0];
    span.onclick = function(){ modal.style.display="none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
    
    
}
function sortRow(){
    alert("hai");
}