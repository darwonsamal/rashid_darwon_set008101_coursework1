

function  Caesar(plainText, key) {
  var text = plainText;


  if(key < 0)
  {
    Caesar(plainText, key + 26);
  }
  else
  {

    cipherText = '';

    for(var i = 0; i < text.length; i++)
    {
      var c = text[i];

      if (c.match(/[a-z]/i))
      {
        var code = text.charCodeAt(i);

        if((code >= 65) && (code <= 90))
        {
          c = String.fromCharCode(((code - 65 + key) % 26) + 65);
        }
        else if((code >= 97) && (code <= 122))
        {
            c = String.fromCharCode(((code - 97 + key) % 26) + 97);
        }


      }

      cipherText += c;
    }


    document.getElementById('decryptInput').value = cipherText;

  }


};


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
