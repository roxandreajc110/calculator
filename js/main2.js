

calculator = {
  op1 : null,
  op2 : null,
  operator : null,
  check_input : function (){
    var input = document.getElementById("input");
    var input_text =input.textContent;
    var errors = documento.querySelector("#error");
    var input_number = Number(input_text);
    if(input_number !== NaN){
      if(this.op1 ===null){
      this.op1 = input_number;
    }

    else{
      this.op2 = input_number;

    }

  } }
};

document.addEventListener("DOMContentLoaded",function(event){
  var input = document.getElementById("input");
  var output = document.getElementById("result");
  var controlPad = document.getElementById("controlpad");

  var button_operators = document.querySelectorAll("#operators button");
  for(var key in button_operators){
    button_operators[key].addEventListener("click",calculator.check_input;
  }






});










// window.onload= function(){
//   var ouput = document.getElementById("result");
//   console.log(output);
//
// };
