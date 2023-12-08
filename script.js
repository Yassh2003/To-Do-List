const inn = document.getElementById("inn");
const add = document.getElementById("add");
const content = document.getElementById("content");

add.addEventListener('click', ()=>{
    var line = document.createElement('div');
    line.className = 'line';
    content.appendChild(line);
    var check = document.createElement('div');
    check.className = 'check';
    line.appendChild(check);
    var cbox = document.createElement('input');
    cbox.setAttribute('type','checkbox');
    cbox.className = 'cbox';
    check.appendChild(cbox);
    var task = document.createElement('div');
    task.className = 'task';
    line.appendChild(task);
    var h3 = document.createElement('h3');
    h3.className = "kaam";
    h3.innerText = inn.value;
    task.appendChild(h3);
    var remove = document.createElement('div');
    remove.className = 'remove';
    line.appendChild(remove);
    var i = document.createElement('i');
    i.className = "fa-regular fa-circle-xmark";
    i.id = "icon";
    remove.appendChild(i);
    inn.value = "";
    save();
})

content.addEventListener('click',(e)=>{
    if(e.target.className == 'cbox'){
        if(e.target.checked){
            var cl = e.target.parentNode.parentNode.getElementsByClassName("task");
            cross = cl[0].getElementsByClassName('kaam');
            cross[0].className = 'decoration';
        }
        else{
            var cl = e.target.parentNode.parentNode.getElementsByClassName("task");
            cross = cl[0].getElementsByClassName('decoration');
            cross[0].className = 'kaam';
        }
    }
    else if(e.target.id == 'icon'){
        var removeit = e.target.parentNode.parentNode;
        removeit.remove();
    }
    save();
})

function save(){
    localStorage.setItem("data",content.innerHTML);
}

function show(){
    content.innerHTML = localStorage.getItem("data");
}

show();
