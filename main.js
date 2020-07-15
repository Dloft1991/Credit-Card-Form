document.onkeyup = function(event) {

  const CardNumber = event.key;
  let MaxLength = 16;
  var max = parseInt($(this).attr('max'));
  var min = parseInt($(this).attr('min'));

    if (CardNumber <= MaxLength) {
      $("#img-input").append(CardNumber);
      this.value = this.value.replace(/[^0-9\.]/g,'');
      // document.getElementById("img-input").append(CardNumber);
    }
    else if (CardNumber > MaxLength){
      alert("Too Many Numbers!")
    }
    
    prevetnDefault();
  
}

document.onkeyup = function(event) {

  const CardName = event.key;
  
      $("#card-name").append(CardNumber);
      this.value = this.value.replace(/[^a-z\.]/g,'');
      // document.getElementById("card-name").append(CardName);
    
    
    prevetnDefault();
  
}