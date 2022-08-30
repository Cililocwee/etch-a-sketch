function gridGenerator(number){  
    let i = 0;
    let n = number;
  
    container.innerHTML = 
      `<div class="row">${'<div class="cell">X</div>'.repeat(n)}</div>`
      .repeat(n).replace(/X/g,_=> (i++).toString(n) )
  }
  
var slider = document.getElementById("myRange");
var output = document.getElementById("slidervalue");
output.innerHTML = slider.value; //display the default slider value

// update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    gridGenerator(this.value);
}

gridGenerator(5);