const list = {
  name: [
    { id: 1, name: "Rabin Hood", isRunning: false },
    { id: 2, name: "Ashiqur Rahman", isRunning: false },
    { id: 4, name: "Tamanna Bhatia", isRunning: false },
    { id: 3, name: "A.T.M Shamsuzzaman", type: "old", isRunning: false }
  ]
};

const input = document.getElementById("name");
let checkOld = document.getElementById("checkOld");
const submit = document.getElementById("submit");
const { name } = list;
let ulList;
let clientList;
let countClient;
let del = document.querySelectorAll(".del");

resetInput = () => {
  input.value = "";
  input.focus();
  checkOld.checked = false;
  checkEmergency.checked = false;
};
addName = singleName => {
  ulList = document.getElementById("ulList");

  if (singleName.type == "old") {
    ulList.innerHTML += `<li class="list-group-item old">${singleName.name} <span class="del" data-id="${singleName.id}">X</span><span class="del old">Old</span></li>`;
  } else if (singleName.type == "emergency") {
    ulList.innerHTML += `<li class="list-group-item emergency">${singleName.name} <span class="del" data-id="${singleName.id}">X</span><span class="del emergency">Emergency</span></li>`;
  } else {
    ulList.innerHTML += `<li class="list-group-item">${singleName.name} <span class="del" data-id="${singleName.id}">X</span></li>`;
  }

  del = document.querySelectorAll(".del");

  removeItem();
  countClients(name.length);
};

function showList() {
  ulList = document.getElementById("ulList");

  name
    .filter(p => p.isRunning != true)
    .map(n => {
      if (n.type == "old") {
        ulList.innerHTML += `<li class="list-group-item old">${n.name} <span class="del" data-id="${n.id}">X</span> <span class="del old">Old</span></li>`;
      } else if (n.type == "emergency") {
        ulList.innerHTML += `<li class="list-group-item emergency">${n.name} <span class="del" data-id="${n.id}">X</span> <span class="del emergency">Emergency</span></li>`;
      } else {
        ulList.innerHTML += `<li class="list-group-item">${n.name} <span class="del" data-id="${n.id}">X</span></li>`;
      }
    });
  del = document.querySelectorAll(".del");
  countClients(name.length);
}

handleSubmit = () => {
  let value = input.value;
  let singleList = new Object();
  singleList.id = name.length + 1;
  singleList.name = value;
  singleList.isRunning = false;
  if (checkOld.checked) {
    singleList.type = "old";
  }
  if (checkEmergency.checked) {
    singleList.type = "emergency";
  }

  name.push(singleList);

  // console.log(name);
  addName(singleList);
  // showList();
};

submit.addEventListener("click", e => {
  e.preventDefault();
  handleSubmit();
  resetInput();
});

function removeItem() {
  del.forEach(function(d) {
    d.addEventListener("click", function(e) {
      let targetName = e.target.parentElement;
      clientList = document.getElementById("ulList");
      let target = e.target;
      name
        .filter(n => n.id == parseInt(target.attributes["data-id"].value))
        .map(p => {
          p.isRunning = true;
          clientList.removeChild(targetName);
          countClient = name.filter(n => n.isRunning !== true);
          countClients(countClient.length);
        });
    });
  });
}

function countClients(totalClient) {
  countClient = document.querySelector(".countClient");
  if (totalClient > 0)
    countClient.innerHTML = totalClient + " people is in the list";
  else {
    countClient.innerHTML = "No people in the list";
  }
}

showList();
removeItem();
// showList(); //SHOW ALL NAME IN THE LIST;
