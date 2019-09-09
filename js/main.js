let list = {
  name: [
    { id: 1, name: "hridoy mozumder", type: "old", isRunning: false },
    { id: 2, name: "Rimon mozumder", type: "old", isRunning: false },
    { id: 3, name: "Rika mozumder", type: "emergency", isRunning: false }
  ]
};
const input = document.getElementById("name");
let checkOld = document.getElementById("checkOld");
const submit = document.getElementById("submit");
const { name } = list;
let ulList;
let clientList;
let countClient;
let counter = 0;
let del = document.querySelectorAll(".del");
let emrg;
let names = list.name;

resetInput = () => {
  input.value = "";
  input.focus();
  checkOld.checked = false;
  checkEmergency.checked = false;
};
addName = singleName => {
  ulList = document.getElementById("ulList");
  counter = names.length;

  if (singleName.type == "old") {
    ulList.innerHTML += `<li class="list-group-item old">${singleName.name} <span class="del" data-id="${singleName.id}">X</span><span class="delz old">Old</span></li>`;
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
    spanEmergency.innerHTML = "Emergency";

    newItem.appendChild(spanDel);
    newItem.appendChild(spanEmergency);
    ulList.prepend(newItem);
  } else {
    ulList.innerHTML += `<li class="list-group-item">${singleName.name} <span class="del" data-id="${singleName.id}">X</span></li>`;
  }

  del = document.querySelectorAll(".del");
  removeItem();
  checkAvailableClients();
};

function showList() {
  ulList = document.getElementById("ulList");

  emrg = name.filter(n => n.type == "emergency");
  emrg.map(n => {
    let index = name.indexOf(n);
    if (index > -1) {
      name.splice(index, 1);
    }
  });
  names = emrg.concat(name);

  names
    .filter(p => p.isRunning != true)
    .map(n => {
      if (n.type == "old") {
        ulList.innerHTML += `<li class="list-group-item old">${n.name} <span class="del" data-id="${n.id}">X</span> <span class="delz old">Old</span></li>`;
      } else if (n.type == "emergency") {
        ulList.innerHTML += `<li class="list-group-item emergency">${n.name} <span class="del" data-id="${n.id}">X</span> <span class="delz emergency">Emergency</span></li>`;
      } else {
        ulList.innerHTML += `<li class="list-group-item">${n.name} <span class="del" data-id="${n.id}">X</span></li>`;
      }
    });
  del = document.querySelectorAll(".del");

  checkAvailableClients();
}

handleSubmit = () => {
  let value = input.value;
  if (value != "") {
    let singleList = new Object();
    singleList.id = names.length + 1;
    singleList.name = value;
    singleList.isRunning = false;
    if (checkOld.checked) {
      singleList.type = "old";
    }
    if (checkEmergency.checked) {
      singleList.type = "emergency";
    }

    if (singleList.type == "emergency") {
      names.splice(0, 0, singleList);
    } else {
      names.push(singleList);
    }

    addName(singleList);
  }
};

submit.addEventListener("click", e => {
  e.preventDefault();
  handleSubmit();
  resetInput();
});

function removeItem(clientList) {
  del.forEach(function(d) {
    d.addEventListener("click", function(e) {
      let target = e.target;
      console.log(target);
      let targetName = e.target.parentElement;
      clientList = document.getElementById("ulList");
      names
        .filter(n => n.id == parseInt(target.attributes["data-id"].value))
        .map(p => {
          p.isRunning = true;
          // countClient = names.filter(n => n.isRunning !== true);
          clientList.removeChild(targetName);
          checkAvailableClients();
          // console.log(clientList.childNodes, targetName);
        });
    });
  });
}

function countClients(totalClient) {
  countClient = document.querySelector(".countClient");
  if (totalClient > 0)
    countClient.innerHTML =
      totalClient.toLocaleString("bn-BD") + " জন রোগী আছেন লিস্টে।";
  else {
    totalClient = 0;
    countClient.innerHTML = "লিস্ট খালি!";
  }
}

function checkAvailableClients() {
  let count = names.filter(n => n.isRunning !== true).length;
  countClients(count);
}

showList();
removeItem();

// console.log(names);
console.log(names);
