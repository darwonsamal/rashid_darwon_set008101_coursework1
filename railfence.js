
function encrypt()
{
  var message = document.getElementById('encryptInput').value;

  message = processString(message);

  var key = document.getElementById('encryptKey').value;

  var cipher = "";

  var i = 0;
  var k = 0;
  var row = 0;
  var col = 0;
  var moved = false;

  key = parseInt(key);

  if(!Number.isInteger(key))
  {
    alert("key is not an integer");
    return;
  }

  var test = createEmptyMatrix(key);



  for( i = 0; i < message.length; i++)
  {
    if(row == 0 || row == key - 1)
    {
      moved = !moved;
    }

    test[row][col++] = message[i];

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
      if(test[i][k])
      {
        cipher += test[i][k];
      }
    }
  }

  console.log(cipher);
}

function decrypt()
{

}


/*HELPER FUNCTIONS FOR HILL CPHER*/
