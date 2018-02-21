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








/*HELPER FUNCTIONS USED IN ALL CIPHERS*/


function processString(string)
{
  string = string.replace(/[0-9]/g, '');
  string = string.replace(/ /g, '');
  string = string.replace(/\s|\W|\d/igm, '');


  return string;
}

function createEmptyMatrix(key)
{
  var test = [];

  for(var i = 0; i < key; i++)
  {
      test.push([]);
  }

  return test;

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


function processPlayfairMessage(message)
{
  var temp_message = [];
  var check = false;
  var y = 0;
  var i = 0;
  var message_matrix = [];

  message = message.toLowerCase();
  message = message.replace(/\s/g, '');
  message = message.replace(/\s|\W|\d/igm, '');

  for(i = 0; i < message.length; i++)
  {
    check = false;
    temp_message.push(message[i]);

    if(temp_message[y] == message[i + 1])
    {
      temp_message.splice(y + 1, 0, 'x');
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
  var finalMatrix = [];
  var alphabet = "abcdefghiklmnopqrstuvwxyz"
  key = key.replace('j', 'i').replace(/[^a-z]/g, '');
  key = key.toLowerCase();

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

  finalMatrix = createEmptyMatrix(5);

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
