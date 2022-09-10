const input = document.getElementById("name");
let checkOld = document.getElementById("checkOld");
let checkEmergency = document.getElementById("checkEmergency");
const submit = document.getElementById("submit");
const adminSide = document.getElementById('adminSide');
const hideShow = document.getElementById('hideShow');
const start = document.getElementById('start');
const { data: name } = list.names;
let ulList;
let clientList;
let countClient;
let counter = 0;
let del = document.querySelectorAll(".del");
let emrg;
let notEmrg;
let named = list.names.length > 0 ? list.names.data : list.names;
let url = "http://localhost/queueManagement/api";



function nextShowClient(listName){
  let nowClient  = document.getElementById('nowClient');
  let nextClient = document.getElementById('nextClient');

  if(listName.length >0 ){
    nowClient.innerHTML = listName[0].name;
  }else{
    nowClient.innerHTML = '.......';
  }


  if(listName.length >= 2){
    nextClient.style.display = 'inlineBlock'; 
    nextClient.innerHTML = listName[1].name; 
  }
  else{
    nextClient.innerHTML = '';
  }
}



resetInput = () => {
  input.value = "";
  input.focus();
  checkOld.checked = false;
  checkEmergency.checked = false;
};

function addName(singleName){
  ulList = document.getElementById("ulList");

  if (singleName.type == "old") {
    ulList.innerHTML += `<li class="list-group-item old">${singleName.name} <span class="del" data-id="${singleName.id}">X</span><span class="delz old">পুরাতন রোগী</span></li>`;
  } else if (singleName.type == "emergency") {
    let newItem = document.createElement("li");
    let spanDel = document.createElement("span");
    let spanEmergency = document.createElement("span");
    newItem.className = "list-group-item emergency";
    newItem.innerHTML = singleName.name;
    spanDel.className = "del";
    spanDel.setAttribute("data-id", parseInt(singleName.id));
    spanDel.innerHTML = "X";
    spanEmergency.className = "delz emergency";
    spanEmergency.innerHTML = "ইমারজেন্সী রোগী";

    newItem.appendChild(spanDel);
    newItem.appendChild(spanEmergency);
    ulList.prepend(newItem);
  } else {
    ulList.innerHTML += `<li class="list-group-item">${singleName.name} <span class="del" data-id="${singleName.id}">X</span></li>`;
  }

  del = document.querySelectorAll(".del");
  removeItem(del);
  checkAvailableClients();
};

function showList() {
  ulList = document.getElementById("ulList");
  
  emrg = name.filter(n => n.type == "emergency");
  notEmrg = name.filter(n => n.type != "emergency");

  names = emrg.concat(notEmrg);
  
  
  names
    .filter(p => p.isRunning != true)
    .map(n => {
      if (n.type == "old") {
        ulList.innerHTML += `<li class="list-group-item old">${n.name} <span class="del" data-id="${n.id}">X</span> <span class="delz old">পুরাতন রোগী</span></li>`;
      } else if (n.type == "emergency") {
        ulList.innerHTML += `<li class="list-group-item emergency">${n.name} <span class="del" data-id="${n.id}">X</span> <span class="delz emergency">ইমারজেন্সী রোগী</span></li>`;
      } else {
        ulList.innerHTML += `<li class="list-group-item">${n.name} <span class="del" data-id="${n.id}">X</span></li>`;
      }
    });

    del = document.querySelectorAll('.del');
    
  removeItem(del);
  checkAvailableClients();
}

handleSubmit = () => {
  let value = input.value;
  if (value != "") {
    let singleList = new Object();
    singleList.id = list.id + 1;
    singleList.name = value;
    singleList.isRunning = false;

    if (checkOld.checked) singleList.type = "old";
    if (checkEmergency.checked)  singleList.type = "emergency";
    if(!checkOld.checked && !checkEmergency.checked ) singleList.type = "new";



    if (checkEmergency.checked) {
      names.unshift(singleList);
    }

    if (!checkEmergency.checked) names.push(singleList);

    del = document.querySelectorAll('.del');
    
    addName(singleList);
    
    //ADDING TO DATABASE
    fetch(url + "/clients/create.php", {
      method: "POST",
      headers: new Headers(),
      body: JSON.stringify({
        name: singleList.name,
        isRunning: singleList.isRunning == false ? "zero" : "one",
        type: singleList.type
      })
    })
      .then(res => res.json())
  }
  list.id = list.id + 1;
};


hideShow.addEventListener('click', e=>{
  e.preventDefault();
  adminSide.style.display = adminSide.style.display == 'block' ? 'none' : 'block';
  if(adminSide.style.display == 'none'){
    hideShow.innerHTML = 'Show input form';
  }else if(adminSide.style.display == 'block'){
    hideShow.innerHTML = 'Hide input form';
    input.focus();
  }
});


start.addEventListener('click', e => {
  e.preventDefault();
  
  let listName = names.filter(n=> n.isRunning != true);
    if(listName.length !=0) {
      document.querySelector('.nextClientSection').style.display = 'block';
      document.querySelector('.nowClientSection').style.display = 'block';
    }
  nextShowClient(listName);
});


submit.addEventListener("click", e => {
  e.preventDefault();
  handleSubmit();
  resetInput();
});

function removeItem(del) {
  
  del.forEach(function(d) {
    d.addEventListener("click", function(e) {
      let targetName = e.target.parentElement;
      clientList = document.getElementById("ulList");
      let target = e.target;
      
      names
        .filter(n => n.id == parseInt(target.attributes["data-id"].value))
        .map(p => {
          p.isRunning = true;
          clientList.removeChild(targetName);
          let listName = names.filter(n=> n.isRunning != true);
          checkAvailableClients();
          
          nextShowClient(listName);
          
          
          fetch(url + "/clients/remove.php", {
            method: "POST",
            headers: new Headers(),
            body: JSON.stringify({ id: p.id, isRunning: "one" })
          })
          .then(res => res.json())
          document.querySelector('.nextClientSection').style.display = names.length == 1 ? 'none' : 'block';
        });
        
    });
  });
}

function countClients(totalClient) {
  countClient = document.querySelector(".countClient");
  if (totalClient > 0)
    countClient.innerHTML =
      totalClient.toLocaleString("bn-BD") + " জন আছেন লিস্টে।";
  else {
    totalClient = 0;
    countClient.innerHTML = "খালি লিস্ট।";
  }
}

function checkAvailableClients() {
  let count = names.filter(n => n.isRunning !== true).length;
  countClients(count);
}

showList();