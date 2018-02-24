


function encrypt()
{
    var cipher = document.getElementById('encryptInput').value;
    var textKey = document.getElementById('encryptKey').value;
    var numericKey = document.getElementById('encryptNumericKey').value;


    numericKey = parseInt(numericKey);

    if(checkIfTextEmpty(cipher) == false || checkIfKeyEmpty(textKey) == false || checkIfKeyAnInteger(numericKey) == false || checkIfKeyEmpty(numericKey) == false)
    {
      return;
    }

    cipher = cipher.replace(/j|J/g, 'i');
    cipher = processString(cipher);

    var encryption = "";
    var keyMatrix = createPlayfairKeyMatrix(textKey);
    var position;

    for (var c in cipher)
    {

      if(isLetter(cipher[c]))
      {
        position = findPosition(keyMatrix, cipher[c]);

        encryption += (position[0] + numericKey);
        encryption += (position[1] + numericKey);
      }
    }

    outputEncryption(encryption, textKey);
    
    document.getElementById('decryptNumericKey').value = numericKey;
    document.getElementById('encryptNumericKey').value = '';

}

function decrypt()
{
  var cipher = document.getElementById('decryptInput').value;
  var textKey = document.getElementById('decryptKey').value;
  var numericKey = document.getElementById('decryptNumericKey').value;


  numericKey = parseInt(numericKey);

  if(checkIfTextEmpty(cipher) == false || checkIfKeyEmpty(textKey) == false || checkIfKeyAnInteger(numericKey) == false || checkIfKeyEmpty(numericKey) == false)
  {
    return;
  }

  var decryption = "";
  var keyMatrix = createPlayfairKeyMatrix(textKey);
  var position;
  var tempHolder = "";

  for (var c in cipher)
  {
      tempHolder += (cipher[c] - numericKey);
  }

  for(var i = 0; i < tempHolder.length; i+=2)
  {
    var row = tempHolder[i];
    var col = tempHolder[i + 1];

    decryption += keyMatrix[row][col];
  }

  outputDecryption(decryption, textKey);

  document.getElementById('encryptNumericKey').value = numericKey;
  document.getElementById('decryptNumericKey').value = '';
}

function isLetter(c)
{
  return c.length == 1 && c.match(/[a-z]/i);
}
