function caesarShift(){

  var word = document.getElementById('encryptInput').value;
  var amount = document.getElementById('encryptKey').value;

  if (amount === ''){

    console.log('enter amount');
    alert('enter amount');

  }
  else{

    amount = parseInt(amount);

    var output = '';

    //Loop through each character
    for (var i = 0; i < word.length; i++){

      var letter = word[i];

      //if it is a letter
      if (letter.match(/^[A-Za-z]+$/)){

        var letter_code = letter.charCodeAt(0);

          //ascii values of uppercase letters
          if ((letter_code >= 65) && (letter_code <= 90)) {
            //add amount without going into other ascii characters
            letter_code = (((letter_code - 65 + amount) % 26) + 65);
          }

          //ascii values of lowercase letters
          if ((letter_code >= 97) && (letter_code <=122)) {
            letter_code = (((letter_code - 97 + amount) % 26) + 97)
          }

        letter = String.fromCharCode(letter_code);
      }
      output += letter;
    }
    console.log(output);
    document.getElementById('decryptInput').value = output;
  }

}
