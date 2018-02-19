/*TODO FUCING FIX*/

function  encrypt()
{
    var text = document.getElementById('encryptInput').value;
    var key = document.getElementById('encryptKey').value;

    key = parseInt(key);

    var cipher = '';

    if(!Number.isInteger(key))
    {
      alert("key is not an integer");
  		return;
    }

    if (key < 0 || key >= 26) {
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
      document.getElementById('encryptKey').value = '';
      document.getElementById('decryptKey').value = key;
      document.getElementById('decryptInput').value = cipher;
      document.getElementById('encryptInput').value = '';
}

function decrypt()
{

      var text = document.getElementById('decryptInput').value;
      var key = document.getElementById('decryptKey').value;

      key = parseInt(key);

      var cipher = '';

      if(!Number.isInteger(key))
      {
        alert("key is not an integer");
    		return;
      }

      if (key < 0 || key >= 26) {
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

      document.getElementById('encryptKey').value = key;
      document.getElementById('decryptKey').value = '';
      document.getElementById('encryptInput').value = cipher;
      document.getElementById('decryptInput').value = '';

}




/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
