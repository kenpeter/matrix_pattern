'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}




function searchOneLine(patArr, txtArr) {
  var patLen = patArr.length;
  var txtLen = txtArr.length;
  var startIndexArr = [];

  // We move one by one in matrix
  var diff = txtLen - patLen;
  for(var i=0; i<=diff; i++) {

    // Through pattern matrix
    for(var j=0; j<patLen; j++) {

      // We start at i=0, at the big matrix
      // Basically, we are moving the small matrix in big matrix
      // We suddently, cannot move on, so need to break and move
      // to next in big matrix
      if(txtArr[i+j] != patArr[j]) {
        break;
      } else {

      }
 // We through all pattern
      // Match the last element.
      if(j == patLen-1) {
        //console.log('-- pattern start --');
        //console.log(i);
        startIndexArr.push(i);
      }
    }
  }

  return startIndexArr;
}


// One size match
function isSameMatch(smallArr, bigArr, smallColLen, bigColLen, myrow, startIndex) {
  var smallRowLen = smallArr.length;
  var bigRowLen = bigArr.length;

  // next row
  var row, smallRowIndex;
  for(row=0, smallRowIndex = 0; row < smallRowLen; row++, smallRowIndex++) {

    var col, smallColIndex;
    for(col=0, smallColIndex = 0; col < smallColLen; col++, smallColIndex++) {
      var rowRange = myrow;
      var colRange = startIndex;

      // Bound check
      if(
        row+rowRange > bigRowLen-1 ||
        col+colRange > bigColLen-1
      ) {
        continue;
      }

      var bigItem = bigArr[row+rowRange][col+colRange];
      var smallItem = smallArr[smallRowIndex][smallColIndex];

        if(bigItem == smallItem) {

        // test
        //console.log("bigItem: " + row + ' ' + col);
        //console.log("smallItem: " + smallRowIndex + ' ' + smallColIndex);
        //console.log(bigItem);

        // Good
      } else {
        return false;
      }

    }

  }

  return true;
}


// Same row with multi match
function isMatrixMatch(smallArr, bigArr, smallColLen, bigColLen, row, startIndexArr) {
  var arr = startIndexArr;
  // Same row may have multi
  for(var i=0; i<arr.length; i++) {
    var startIndex = arr[i];
    var condi = isSameMatch(smallArr, bigArr, smallColLen, bigColLen, row, startIndex);
    if(condi == true) {
      return true;
    } else {
      // continue
    }
  }

  return false;
}


function mySearch(smallArr, bigArr) {
  var smallColLen = smallArr[0].length;
  var bigColLen = bigArr[0].length;

  // loop big matrix
  for(var i=0; i<bigArr.length; i++) {
    var bigLine = bigArr[i];

    // loop small matrix
    for(var j=0; j<smallArr.length; j++) {
      var smallLine = smallArr[j];

      // Find match in one line
      var startIndexArr = searchOneLine(smallLine, bigLine);

      /*
      console.log('--');
      console.log(i);
      console.log(startIndexArr);
      */
        
        if(startIndexArr.length > 0) {
        var condi = isMatrixMatch(smallArr, bigArr, smallColLen, bigColLen, i, startIndexArr);
        if(condi == true) {
          return true;
        } else {
          // con
        }
      } else {
        // con
      }
    }

  }

  return false;
}


function gridSearch(smallArr, bigArr) {

  var condi = mySearch(smallArr, bigArr);
  if(condi) {
    return 'YES';
  } else {
    return 'NO';
  }
}
        
        
        




function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const RC = readLine().split(' ');

        const R = parseInt(RC[0], 10);

        const C = parseInt(RC[1], 10);

        let G = [];

        for (let i = 0; i < R; i++) {
            const GItem = readLine();
            G.push(GItem);
        }

        const rc = readLine().split(' ');

        const r = parseInt(rc[0], 10);

        const c = parseInt(rc[1], 10);

        let P = [];

        for (let i = 0; i < r; i++) {
            const PItem = readLine();
            P.push(PItem);
        }

        let result = gridSearch(G, P);

        ws.write(result + "\n");
    }

    ws.end();
}

