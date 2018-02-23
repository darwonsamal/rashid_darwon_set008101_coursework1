/* Opens the nav bar from the left side by setting width to 250px*/
function openNav()
{
    document.getElementById("mySidenav").style.width = "250px";

}

/* Closes the nav bar from the left side by setting width to 0px*/
function closeNav()
{
    document.getElementById("mySidenav").style.width = "0";
}



/*HELPER FUNCTIONS USED IN ALL CIPHERS*/


function processString(string)
{
  string = string.replace(/[0-9]/g, '');
  string = string.replace(/ /g, '');
  string = string.replace(/\s|\W|\d/igm, '');


  return string;
}

function createEmptyMatrix(sizeOfMatrix)
{
  var matrix = [];

  for(var i = 0; i < sizeOfMatrix; i++)
  {
      matrix.push([]);
  }

  return matrix;

}

function checkIfTextEmpty(string)
{
  if(string == "")
  {
    alert("Enter input for Encryption/Decryption ");
    return false;
  }
}

function checkIfKeyEmpty(key)
{
  if(key == "")
  {
    alert("Enter key for Encryption/Decryption ");
    return false;
  }
}

function checkIfKeyAnInteger(key)
{
  if(!Number.isInteger(key))
  {
    alert("Key is not an integer! Enter Integer as key");
    return false;
  }
}

function outputEncryption(cipher, key)
{
  document.getElementById('encryptKey').value = '';
  document.getElementById('decryptKey').value = key;
  document.getElementById('decryptInput').value = cipher;
  document.getElementById('encryptInput').value = '';
}

function outputDecryption(message, key)
{
  document.getElementById('encryptKey').value = key;
  document.getElementById('decryptKey').value = '';
  document.getElementById('encryptInput').value = message;
  document.getElementById('decryptInput').value = '';
}

/*PLAYFAIR EXCLUSIVE HELPER FUNCTIONS */
function findPosition(keyMatrix, letter)
{
  var x = 0;
  var y = 0;

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


function processPlayfairMessage(message, check)
{

  var temp_message = [];
  var flag = false;
  var y = 0;
  var i = 0;
  var message_matrix = [];

  message = message.toLowerCase();
  //message = processString(message);

  for(i = 0; i < message.length; i++)
  {
    flag = false;
    temp_message.push(message[i]);

    if(temp_message[y] == message[i + 1] && check == true)
    {
      temp_message.splice(y + 1, 0, 'x');
      flag = true;
      y+=2;
    }

    if(flag == false)
    {
      y++;
    }
  }

  if((temp_message.length % 2) == 1)
  {
    temp_message.push('x');
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


function createPlayfairKeyMatrix(key)
{
  var tempMatrix = [];
  var finalMatrix = createEmptyMatrix(5);
  var alphabet = "abcdefghiklmnopqrstuvwxyz"
  key = processString(key);

  key = key.toLowerCase();
  key = key.replace('j', 'i');


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
