var buttons = document.getElementsByClassName("greeting");

for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(event){
    showGreeting(this.id);
  })
}

var showGreeting = function(language){
  var output = document.getElementById("output-text");
  var greeting = "WDI 13 speaks: " + language;
  output.innerText = greeting;
}