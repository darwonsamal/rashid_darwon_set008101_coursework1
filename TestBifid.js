


function bifidEncrypt()
{
    var cipher = "testyoyes";
    var key = "darwon";
    var nonChar = 0;
    var row = "";
    var col= "";
    var found = false;
    cipher = cipher.replace('j', 'i');
    var encryption = "";

    var keyMatrix = createPlayfairKeyMatrix(key);
    console.log(keyMatrix);

    for (var c in cipher)
    {

      if(isLetter(cipher[c]))
      {
        outerLoop:
        for(var i in keyMatrix)
        {
          /*
          if(found)
          {
            break;
          } */

          for(var j in keyMatrix)
          {

            if(keyMatrix[i][j] == cipher[c])
            {
              var tempRow = i + 1;
              var tempCol = j + 1;
              row += tempRow.toString();
              col += tempCol.toString();


              found = true;
              break outerLoop;

            }
          }
        }
      }

    }
    console.log(row);
    console.log(col);

    for(var i in cipher)
    {
      encryption += row[i];
      encryption += col[i];
    }

    encryption = processPlayfairMessage(encryption, false);

}

function isLetter(c)
{
  return c.length == 1 && c.match(/[a-z]/i);
}

function checkIfLetterJ(c)
{
  if(c == 'j')
  {
    //console.log(c);
    c = 'i';
  //  console.log(c);
    return c;
  }
  return c;
}
