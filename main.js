document.onkeyup = function(event) {

  const CardNumber = event.key;

  
    document.getElementById("img-input").innerHTML = CardNumber
    prevetnDefault();;
  

  
}