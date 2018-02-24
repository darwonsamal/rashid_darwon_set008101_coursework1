function railfenceDecode() {
  var outputString = [];
  var tempOut = [];
  var tempOutFirst = [];
  var tempOutSecond = [];
  var tempOutThird = [];
  var inputString = "test";
  inputString = inputString.toUpperCase();
  var letterValue = 0;
  var counter = 0;
  var firstchar = 0;

  for (var i = 0; i < inputString.length; i++) {
    var current = inputString[i];
    if (current != " ") {
      letterValue= inputString.charCodeAt(i);
      if ((letterValue < 91) && (letterValue > 64)) {

      }
    }
  }
  console.log(tempOutFirst);
  console.log(tempOutSecond);
  console.log(tempOutThird);


}
