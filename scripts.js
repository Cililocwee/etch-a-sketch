const content = document.querySelector('#content');

const div = document.createElement('div');
div.setAttribute('style', 'background-color:blue;height:90px;width:90px;');

content.appendChild(div);

var container = document.getElementById("grid-container");
var cell = document.createElement("div");
cell.innerHTML = "TEXT";
for (let i = 0; i < 9; i++){
    container.appendChild(cell);
}
