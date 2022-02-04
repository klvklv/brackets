module.exports = function check(str, bracketsConfig) {
	let confMap = new Map(bracketsConfig);
	let array = str.split("");
	if(array.length%2 != 0) return false;
	let tempArray = [];
	for(const bracket of array) {
		if(bracket == confMap.get(bracket)) { // not pair (single) bracket
			if (tempArray.length>0 && bracket == tempArray[tempArray.length - 1]) tempArray.pop();
			else tempArray.push(bracket);
		}
		else {
			if(confMap.has(bracket)) tempArray.push(bracket); // alwais push open bracket
			else { // bracket is a close bracket
				if(tempArray.length == 0) return false;
				let lastCloseBracket = confMap.get(tempArray[tempArray.length - 1]);
				if(lastCloseBracket == bracket) tempArray.pop();
				else return false;
			}
		}
	}
	return tempArray.length == 0;
}
