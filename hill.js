
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


/*HILL CIPHER ALGORITHM DOWN HERE*/


function startCipher()
{

}

function encrypt()
{
  var encryptedText = "";
  matrixSize = 3;

  var message = document.getElementById('encryptInput').value;
  var keyMatrix = createKeyMatrix(document.getElementById('encryptKey').value);

  for(var i = 0; i < message.length; i+=matrixSize)
  {
    var threeLetters = message.substring(i, i + matrixSize);

    var tempArray = [];

  //  console.log(threeLetters);

    for(var j = 0; j < threeLetters.length; j++)
    {

      var tempLetter = convertCharToNumber(threeLetters[j]);




    }




  }
  console.log(tempArray);
}

function decrypt()
{

}

/*HELPER FUNCTIONS FOR HILL CPHER*/
function processString(message)
{
  message = message.replace(/[0-9]/g, '');
  message = message.replace(/ /g, '');
  message = message.replace(/\s|\W|\d/igm, '');
  message = message.toUpperCase();

  return message;
}

function processMessage(message)
{
  message = processString(message);




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


function inverseMod(a, m)
{
  a = a % m;

  if(a < 0)
  {
    a+=m;
  }

  for(var i = 1; i < m; i++)
  {
    if(((a*i) % m) == 1)
    {
      return i;
    }
  }
}

function convertCharToNumber(char)
{
  var temp = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  char = char.toUpperCase();
  for(var i = 1; i < temp.length; i++)
  {
    if(char == temp[i])
    {
      return i;
    }
  }
  return -1;
}


function createKeyMatrix(key)
{

  key = processString(key);

  if(key.length > 9)
  {
    alert("Key length can't be more than 9");
  }

  var keyMatrix = [[],[],[]];
  var keyArray = [];

  var y = 0;

  var alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";

  var i  = 0;

  for(i = 0; i < key.length; i++)
  {
    keyArray.push(key[i]);
  }

  for(i = 0; i < alphabet.length; i++)
  {
    if(keyArray.length == 9)
    {
      break;
    }

    if(!keyArray.includes(alphabet[i]))
    {
      keyArray.push(alphabet[i]);
    }

  }

  var x = 0;

  for(i = 0; i < keyArray.length; i++)
  {
    if(keyMatrix[y].length == 3)
    {
      y++;
    }
    if(y == 4)
    {
      break;
    }
    var temp = keyArray[i];

    keyMatrix[y].push(convertCharToNumber(temp));
  }
  console.log(keyMatrix);

  return keyMatrix;

}
