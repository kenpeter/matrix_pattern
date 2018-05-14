
function search(pat, txt) {
	var patArr = pat.split('');
	var txtArr = txt.split('');
	
	var patLen = patArr.length;
	var txtLen = txtArr.length;

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
				console.log('-- break --');
				console.log("i: " + i + " " + "j: " + j);
				break;
			} else {
				console.log('-- match --');
				console.log(txtArr[i+j]);
				console.log(patArr[j]);
				console.log("j: " + j + " " + "patLen: " + patLen);
			}

			// We through all pattern
			// Match the last element.
			if(j == patLen-1) {
				console.log('-- pattern start --');
				console.log(i);
			}
		}
	}		
}

/*
var txt = "AABAACAADAABAAABAA";
var pat = "AABA";
*/

var txt = '12345';
var pat = '34';

search(pat, txt);
