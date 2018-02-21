
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






function encrypt()
{
  var message = document.getElementById('encryptInput').value;

  var key = document.getElementById('encryptKey').value;

  var column = message.length % key;
  console.log(column);
  var cipher = "";
  key = parseInt(key);
  var i;
  var test = [];

  for(i = 0; i < key; i++)
  {
    	test.push([]);
  }
  var k = 0;
  var j = 0;
  /*
  for(i = 0; i < column; i++)
  {
    for(j = 0; j < key; j++)
    {
      if(k != message.length)
      {
        test[j].push(message.charAt(k++));
      }
      else
      {
        test[j].push('X');
      }
    }
  }

  for(i = 0; i < column; i++)
  {
    for(j = 0; j < key; j++)
    {
      cipher+=test[i][j];
    }
  }
  */


  var row = 0;
  var col = 0;

  var direction = false;

  for(var i = 0; i < message.length; i++)
  {
    if(row == 0 || row == key - 1)
    {
      direction = !direction;
    }

    test[row][col++] = message[i];

    if(direction)
    {
      row++;
    }
    else
    {
      row--;
    }
  }




  console.log(test);
  console.log(cipher);
}


/*HELPER FUNCTIONS FOR HILL CPHER*/
function processString(string)
{
  message = message.replace(/[0-9]/g, '');
  message = message.replace(/ /g, '');
  message = message.replace(/\s|\W|\d/igm, '');
  message = message.toUpperCase();

  return message;
}
