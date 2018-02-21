
/* Set the width of the side navigation to 250px */
function openNav()
{
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav()
{
    document.getElementById("mySidenav").style.width = "0";
}


//TODO shorten code
/* PLAYFAIR CIPHER SHIT RIGHT HERE */

function createMatrix(key)
{
  var tempMatrix = [];
  var finalMatrix = [];
  var alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"
  key = key.replace('j', 'i').replace(/[^a-z]/g, '');
  key = key.toUpperCase();

  for(var i = 0; i < key.length; i++)
  {
    if(!tempMatrix.includes(key[i]))
    {
      tempMatrix.push(key[i]);
    }
  }

  for (var j = 0; j < alphabet.length; j++)
  {
    if(!tempMatrix.includes(alphabet[j]))
    {
      tempMatrix.push(alphabet[j]);
    }
  }

  for( var i = 0; i < 5; i++)
  {
    finalMatrix.push([]);
  }

  var y = 0;

  for(var w = 0; w < tempMatrix.length; w++)
  {
    if(finalMatrix[y].length == 5)
    {
      y++;
    }
    finalMatrix[y].push(tempMatrix[w]);
  }
  return finalMatrix;
}

function processMessage(message)
{
  var temp_message = [];
  var check = false;
  var y = 0;
  var i = 0;
  var message_matrix = [];

  message = message.toUpperCase();
  message = message.replace(/\s/g, '');
  message = message.replace(/\s|\W|\d/igm, '');

  for(i = 0; i < message.length; i++)
  {
    check = false;
    temp_message.push(message[i]);

    if(temp_message[y] == message[i + 1])
    {
      temp_message.splice(y + 1, 0, 'X');
      check = true;
      y+=2;
    }

    if(check == false)
    {
      y++;
    }
  }

  if((temp_message.length % 2) == 1)
  {
    temp_message.push('X');
  }

  for(i = 1; i < temp_message.length/ 2 + 1; i++)
  {
    message_matrix.push([]);
  }

  y = 0;
  for(i = 0; i < temp_message.length; i++)
  {
    if(message_matrix[y].length == 2)
    {
      y++;
    }
    message_matrix[y].push(temp_message[i]);
  }
  return message_matrix;
}

function findPosition(keyMatrix, letter)
{
  var x = 0;
  var y = 0;

  //TODO shorten code
  for(var i = 0; i < 5; i++)
  {
    for(var j = 0; j < 5; j++)
    {
      if(keyMatrix[i][j] == letter)
      {
        x = i;
        y = j;
      }
    }
  }
  return [x,y];
}

function encrypt(message)
{
  var messageMatrix = processMessage(message);
  var key = document.getElementById('encryptKey').value;
  var keyMatrix = createMatrix(key);

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
  var keyMatrix = createMatrix(key);

  var message = "";

  //TODO shorten code
  for(j = 1; j < cipher.length/ 2 + 1; j++)
  {
    cipherMatrix.push([]);
  }

  cipher = cipher.toUpperCase();

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
