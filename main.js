function AddNumber() {

  document.onkeyup = function(event) {

    let CardNumber = event.key;
    
  
        $("#img-input").append(CardNumber);
        this.value = this.value.replace(/[^0-9\.]/g,'');
     
      
      prevetnDefault();
      
    
  } 
  
}
 // Name
function AddName() {
  document.onkeyup = function(event) {
    let CardName = event.key;

    $("#img-name").append(CardName);
        this.value = this.value.replace(/[^0-9\.]/g,'');
  }
  
}

AddName();
AddNumber();
