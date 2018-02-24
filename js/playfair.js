
function encrypt()
{
  var message = document.getElementById('encryptInput').value;
  var key = document.getElementById('encryptKey').value;

  if(checkIfTextEmpty(message) == false || checkIfKeyEmpty(key) == false)
  {
    return;
  }

  var messageMatrix = processPlayfairMessage(message, true);
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

  outputEncryption(cipher, key);

}

function decrypt()
{
  var cipher = document.getElementById('decryptInput').value;
  var key = document.getElementById('decryptKey').value;

  if(checkIfTextEmpty(cipher) == false || checkIfKeyEmpty(key) == false)
  {
    return;
  }

  cipher = cipher.toLowerCase();

  var keyMatrix = createPlayfairKeyMatrix(key);
  var j = 0;
  var cipherMatrix = [];
  var message = "";

  for(j = 1; j < cipher.length/ 2 + 1; j++)
  {
    cipherMatrix.push([]);
  }

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

    outputDecryption(message, key);
}
