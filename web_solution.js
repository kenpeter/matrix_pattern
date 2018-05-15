


// bigRow, bigCol is the starting point
// We use small matrix's coord as len
function checkMatch(bigRow, bigCol, smallHeight, smallWidth, smallArr, bigArr) {
	// Loop height
	for(var smallRow = 0; smallRow < smallHeight; smallRow++) {
		for(var smallCol = 0; smallCol < smallWidth; smallCol++) {
			var smallItem = smallArr[smallRow][smallCol];
			var bigItem = bigArr[bigRow+smallRow][bigCol+smallCol];	
			if(smallItem !== bigItem) {

				console.log('-- diff --');	
				console.log(smallItem);
				console.log(bigItem);

				return false;
			} else {
				console.log('-- same --');
        console.log(smallItem);
        console.log(bigItem);
			}
		}
	}

	return true;
}


function search(smallArr, bigArr) {
	var smallWidth = smallArr[0].length;
  var bigWidth = bigArr[0].length;	
	var smallHeight = smallArr.length;
	var bigHeight = bigArr.length;

	for(var bigRow = 0; bigRow < bigHeight - smallHeight; bigRow++) {
		
		for(var bigCol = 0; bigCol < bigWidth - smallWidth; bigCol++) {
			if( checkMatch(bigRow, bigCol, smallHeight, smallWidth, smallArr, bigArr) ) {
				console.log('Found: ' + bigRow + " | " + bigCol);
				return true;
			} else {

			}
		}

	}

	return false;
}

function gridSearch(smallArr, bigArr) {
	var condi = search(smallArr, bigArr);
	if(condi == true)
		return "YES";
	else
		return "NO";
}


/*
var bigArr = 
[ '7283455864',
  '6731158619',
  '8988242643',
  '3830589324',
  '2229505813',
  '5633845374',
  '6473530293',
  '7053106601',
  '0834282956',
  '4607924137' ];

var smallArr = 
[ '9505', '3845', '3530' ];
*/

var bigArr = ['123', '145', '146'];
var smallArr = ['45', '46'];

var out = gridSearch(smallArr, bigArr);
console.log(out);
