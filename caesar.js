

function  encrypt()
{
    var text = document.getElementById('encryptInput').value;
    var key = document.getElementById('encryptKey').value;

    key = parseInt(key);

    if(checkIfTextEmpty(text) == false || checkIfKeyEmpty(key) == false || checkIfKeyAnInteger(key) == false)
    {
      return;
    }

    var cipher = '';

    if (key < 0 || key >= 26)
    {
    	alert("Shift is out of range");
    	return;
    }

    for(var i = 0; i < text.length; i++)
    {
        var code = text.charCodeAt(i);

        if((code >= 65) && (code <= 90))
        {
          cipher += String.fromCharCode(((code - 65 + key) % 26) + 65);
        }
        else if((code >= 97) && (code <= 122))
        {
            cipher += String.fromCharCode(((code - 97 + key) % 26) + 97);
        }
        else
        {
          cipher += text.charCodeAt(i);
        }

    }
      outputEncryption(cipher, key);
}

function decrypt()
{

      var text = document.getElementById('decryptInput').value;
      var key = document.getElementById('decryptKey').value;

      key = parseInt(key);

      if(checkIfTextEmpty(text) == false || checkIfKeyEmpty(key) == false || checkIfKeyAnInteger(key) == false)
      {
        return;
      }


      var cipher = '';

      if (key < 0 || key >= 26)
      {
      	alert("Shift is out of range");
      	return;
      }

      for(var i = 0; i < text.length; i++)
      {
          var code = text.charCodeAt(i);

          if((code >= 65) && (code <= 90))
          {
            cipher += String.fromCharCode(((code - 90 - key) % 26) + 90);
          }
          else if((code >= 97) && (code <= 122))
          {
              cipher += String.fromCharCode(((code - 122 - key) % 26) + 122);
          }
          else
          {
            cipher += text.charCodeAt(i);
          }

      }

      outputDecryption(cipher, key);
}
