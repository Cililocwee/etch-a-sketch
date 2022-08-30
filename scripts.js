

function gridGenerator(number){  
    let i = 0;
    let n = number;

    // creates an N amount of rows, an N amount of times
    container.innerHTML = 
      `<div class="row">${'<div class="cell" id="x">x</div>'.repeat(n)}</div>`
      .repeat(n).replace(/x/g,_=> (i++).toString(n));  //replaces x with i++
} 

var slider = document.getElementById("myRange");
var output = document.getElementById("slidervalue");
output.innerHTML = slider.value; //display the default slider value


// update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    gridGenerator(this.value);
}

var color = ["black","blue", "pink","yellow"];

function changeColor(){
    document.querySelector('.cell').style.background
    = color[Math.floor(Math.random() * color.length)];
}

gridGenerator(11);