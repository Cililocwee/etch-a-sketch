function gridGenerator(number){  
    let i = 0;
    let n = number;
  
    container.innerHTML = 
      `<div class="row">${'<div class="cell">X</div>'.repeat(n)}</div>`
      .repeat(n).replace(/X/g,_=> (i++).toString(n) )
  }
  
  gridGenerator(5);
