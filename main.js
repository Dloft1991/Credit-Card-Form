// function MyCard() {
//     var MyNumber = document.getElementById("card-number").value;
//     document.getElementById("img-input").innerHTML(MyNumber);
//     console.log(MyNumber);
// }
var MyNumber = document.getElementById("card-number").value;
$(document).ready(function(){
    $("input").keydown(function(){
    //   $("input").css("background-color", "yellow");
      $("#img-input").append(MyNumber);
      console.log(MyNumber);
    });
    $("input").keyup(function(){
    //   $("input").css("background-color", "pink");
    });
  });