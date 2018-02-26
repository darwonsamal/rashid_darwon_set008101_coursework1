
/*

Author: Darwon Rashid
Matric Number: 40280334
Description: Encryption and decryption of railfence Cipher.

 */

function encrypt()
{
  var message = document.getElementById('encryptInput').value;

  var key = document.getElementById('encryptKey').value;

  key = parseInt(key);

  if(checkIfTextEmpty(message) == false || checkIfKeyEmpty(key) == false || checkIfKeyAnInteger(key) == false)
  {
    return;
  }

  var cipher = "";

  var i = 0;
  var k = 0;
  var row = 0;
  var col = 0;
  var moved = false;
  var keyMatrix = createEmptyMatrix(key);

  for( i = 0; i < message.length; i++)
  {
    if(row == 0 || row == key - 1)
    {
      moved = !moved;
    }

    keyMatrix[row][col++] = message[i];

    if(moved)
    {
      row++;
    }
    else
    {
      row--;
    }
  }

  for(i = 0; i < key; i++)
  {
    for(k = 0; k < message.length; k++)
    {
      if(keyMatrix[i][k])
      {
        cipher += keyMatrix[i][k];
      }
    }
  }

  outputEncryption(cipher, key);
}

function decrypt()
{
  var cipher = document.getElementById('decryptInput').value;

  var key = document.getElementById('decryptKey').value;

  key = parseInt(key);

  if(checkIfTextEmpty(message) == false || checkIfKeyEmpty(key) == false || checkIfKeyAnInteger(key) == false)
  {
    return;
  }

  var message = "";

  var i = 0;
  var k = 0;
  var y = 0;
  var row = 0;
  var col = 0;
  var moved = false;
  var matrix = createEmptyMatrix(key);

  for(i = 0; i < cipher.length; i++)
  {
    if(row == 0)
    {
      moved = true;
    }
    if(row == key - 1)
    {
      moved = false;
    }

    matrix[row][col++] = '#';

    if(moved)
    {
      row++;
    }
    else
    {
      row--;
    }

  }

  for(i = 0; i < key; i++)
  {
    for(k = 0; k < cipher.length; k++)
    {
      if(matrix[i][k] == '#' && y < cipher.length)
      {
        matrix[i][k] = cipher[y++];
      }
    }
  }

  row = 0;
  col = 0;

  for(i = 0; i < cipher.length; i++)
  {
    if(row == 0)
    {
      moved = true;
    }
    if(row == key - 1)
    {
      moved = false;
    }

    if(matrix[row][col] != '#')
    {
      message+= matrix[row][col++];
    }

    if(moved)
    {
      row++;
    }
    else
    {
      row--;
    }
  }

  outputDecryption(message, key);

}
