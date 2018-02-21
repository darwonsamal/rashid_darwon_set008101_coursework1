
//TODO shorten code
/* PLAYFAIR CIPHER SHIT RIGHT HERE */


function encrypt(message)
{
  var messageMatrix = processPlayfairMessage(message);
  var key = document.getElementById('encryptKey').value;
  var keyMatrix = createPlayfairKeyMatrix(key);

  var cipher = "";

  for(var i = 0; i < messageMatrix.length; i++)
  {
    var positionA = findPosition(keyMatrix, messageMatrix[i][0]);
    var positionB = findPosition(keyMatrix, messageMatrix[i][1]);

    if(positionA[0] == positionB[0])
    {
      if(positionA[1] < 4)
      {
        positionA[1]++;
      }
      else
      {
        positionA[1] = 0;
      }
      if(positionB[1] < 4)
      {
        positionB[1]++;
      }
      else
      {
        positionB[1] = 0;
      }

    }
    else if (positionA[1] == positionB[1])
    {
      if(positionA[0] < 4)
      {
        positionA[0]++;
      }
      else
      {
        positionA[0] = 0;
      }
      if(positionB[0] < 4)
      {
        positionB[0]++;
      }
      else
      {
        positionB[0] = 0;
      }

    }
    else
    {
      var temp = positionA[1];
      positionA[1] = positionB[1];
      positionB[1] = temp;
    }

    cipher = cipher + keyMatrix[positionA[0]][positionA[1]] + keyMatrix[positionB[0]][positionB[1]];
  }
  document.getElementById('encryptKey').value = '';
  document.getElementById('decryptKey').value = key;
  document.getElementById('decryptInput').value = cipher;
  document.getElementById('encryptInput').value = '';

}


function decrypt(cipher)
{
  var j = 0;

  var cipherMatrix = [];
  var key = document.getElementById('decryptKey').value;
  var keyMatrix = createPlayfairKeyMatrix(key);

  var message = "";

  //TODO shorten code
  for(j = 1; j < cipher.length/ 2 + 1; j++)
  {
    cipherMatrix.push([]);
  }

  cipher = cipher.toLowerCase();

  j = 0;

  for(var o = 0; o < cipher.length; o++)
  {
    if(cipherMatrix[j].length == 2)
    {
      j++;
    }
    cipherMatrix[j].push(cipher[o]);
  }

  for(var i = 0; i < cipherMatrix.length; i++)
  {
      var positionA = findPosition(keyMatrix, cipherMatrix[i][0]);
      var positionB = findPosition(keyMatrix, cipherMatrix[i][1]);

      if(positionA[0] == positionB[0])
      {
        positionA[1]--;
        positionB[1]--;

        if(positionA[1] < 0)
        {
          positionA[1] = 4;
        }
        if(positionB[1] < 0)
        {
          positionB[1] = 4;
        }
      }
      else if (positionA[1] == positionB[1])
      {
        positionA[0]--;
        positionB[0]--;

        if(positionA[0] < 0)
        {
          positionA[0] = 4;
        }
        if(positionB[0] < 0)
        {
          positionB[0] = 4;
        }
      }
      else
      {
        var temp = positionA[1];
        positionA[1] = positionB[1];
        positionB[1] = temp;
      }
        message = message + keyMatrix[positionA[0]][positionA[1]] + keyMatrix[positionB[0]][positionB[1]];
    }

    message = message.replace(/x|X/g, '');
    message = message.toLowerCase();

    document.getElementById('encryptKey').value = key;
    document.getElementById('decryptKey').value = '';
    document.getElementById('encryptInput').value = message;
    document.getElementById('decryptInput').value = '';
}
