
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


// YES
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

var smallArr = [ '9505', '3845', '3530' ]; 


/*
// NO
var bigArr = 
	[ '400453592126560',
  '114213133098692',
  '474386082879648',
  '522356951189169',
  '887109450487496',
  '252802633388782',
  '502771484966748',
  '075975207693780',
  '511799789562806',
  '404007454272504',
  '549043809916080',
  '962410809534811',
  '445893523733475',
  '768705303214174',
  '650629270887160' ];

var smallArr = [ '99', '99' ]; 
*/


/*
// NO
var bigArr =
[ '34889246430321978567',
  '58957542800420926643',
  '35502505614464308821',
  '14858224623252492823',
  '72509980920257761017',
  '22842014894387119401',
  '01112950562348692493',
  '16417403478999610594',
  '79426411112116726706',
  '65175742483779283052',
  '89078730337964397201',
  '13765228547239925167',
  '26113704444636815161',
  '25993216162800952044',
  '88796416233981756034',
  '14416627212117283516',
  '15248825304941012863',
  '88460496662793369385',
  '59727291023618867708',
  '19755940017808628326' ];

var smallArr =
[ '1641', '7942', '6517', '8907', '1376', '2691', '2599' ];
*/

/*
// YES
var bigArr =
[ '7652157548860692421022503',
  '9283597467877865303553675',
  '4160389485250089289309493',
  '2583470721457150497569300',
  '3220130778636571709490905',
  '3588873017660047694725749',
  '9288991387848870159567061',
  '4840101673383478700737237',
  '8430916536880190158229898',
  '8986106490042260460547150',
  '2591460395957631878779378',
  '1816190871689680423501920',
  '0704047294563387014281341',
  '8544774664056811258209321',
  '9609294756392563447060526',
  '0170173859593369054590795',
  '6088985673796975810221577',
  '7738800757919472437622349',
  '5474120045253009653348388',
  '3930491401877849249410013',
  '1486477041403746396925337',
  '2955579022827592919878713',
  '2625547961868100985291514',
  '3673299809851325174555652',
  '4533398973801647859680907' ];


var smallArr = 
[ '5250', '1457', '8636', '7660', '7848' ];
*/


/*
var bigArr = [
	'878756',
	'242424',
	'515556',
	'444444',
	'887444',
	'424444',
	'456444'
];

var smallArr = [
	'87',
	'24',
	'56'
];
*/

var out = gridSearch(smallArr, bigArr);
console.log(out);
