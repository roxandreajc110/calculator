

var calculator = {
  resu : null,
  operator : null,
  check_input : function (button){

    var self = calculator;
    console.log("Check Input");
    var input = document.getElementById("input");
    var input_text =input.value;
    var errors = document.querySelector("#error");
    var input_number = Number(input_text);

    if(!Number.isNaN(input_number)){
    input.value = "";
    console.log("Error es NaN");
    }
    },

    set_number : function(button){
      return function(){
      var input = document.getElementById("input");
      input.value = ""+input.value+button.textContent;
      };

    },
    exec_operator: function(button){
      var self = calculator;
      return function (){
        if(sel.result === null){

        }

      };
      

    },
    clear : function(){
      this.resu = null;
      this.op2 = null;
      this.operator = null;
      var input = document.getElementById("input");
      input.value = "";


    },







};

document.addEventListener("DOMContentLoaded",function(event){
  //var input = document.getElementById("input");
  //Una vez la pagina ha cargado
  var output = document.getElementById("resu");
  var controlPad = document.getElementById("controlpad");

  var button_operators = document.querySelectorAll("#operators button");
  var i;
  for(i = 0;i<button_operators.length;i++){
    button_operators[i].addEventListener("click",calculator.check_input;
  }

  var button_numbers= controlPad.querySelectorAll("#numbers button");

  for(i=0;i<button_numbers.length;i++){
    //Agregando el listener a cada botton.
    button_numbers[i].addEventListener("click",calculator.set_number(button_numbers[i]));
    console.log(this);
  }

    var button_clear = controlPad.querySelector("#clear");
    button_clear.addEventListener("click",calculator.clear);





});










// window.onload= function(){
//   var ouput = document.getElementById("resu");
//   console.log(output);
//
// };
