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
let del = document.querySelectorAll(".del");

resetInput = () => {
  input.value = "";
  input.focus();
  checkOld.checked = false;
};
addName = name => {
  ulList = document.getElementById("ulList");
  ulList.innerHTML += `<li class="list-group-item">${name.name} <span class="del" data-id="${name.id}">X</span></li>`;

  del = document.querySelectorAll(".del");

  removeItem();
};

function showList() {
  ulList = document.getElementById("ulList");
  name
    .filter(p => p.isRunning != true)
    .map(n => {
      ulList.innerHTML += `<li class="list-group-item">${n.name} <span class="del" data-id="${n.id}">X</span></li>`;
    });
  del = document.querySelectorAll(".del");
  // removeItem();
}
showList();

handleSubmit = () => {
  let value = input.value;
  let singleList = new Object();
  singleList.id = name.length + 1;
  singleList.name = value;
  singleList.isRunning = false;
  if (checkOld.checked) {
    singleList.type = "old";
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
        });
    });
  });
}

removeItem();
// showList(); //SHOW ALL NAME IN THE LIST;
// console.log(ulList.childNodes);
