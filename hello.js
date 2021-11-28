
let result= document.getElementById("result");

function get_calc(elem) {
    if(result.value==="0") {
     return;
   
    }else {
     result.value = result.value + elem.value;
    }
}

function edit(elem) {
    if(result.value.slice(-1)==="+") {
    return;
    
    }else if(result.value.slice(-1)==="-") {
    return;
    
    }else if(result.value.slice(-1)==="*") {
    return;
    
    }else if(result.value.slice(-1)==="/") {
    return;
    
    }else{
       result.value= result.value + elem.value; 
}
}

function calc() {
  result.value = eval(result.value);
}

function update() {
    result.value="";
}

