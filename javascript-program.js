const array = [1,2,3,4,5];
function findMinAndMax(array) {
	const minArray = array.sort();
	const maxArray = array.sort((a, b) => {return b-a;});
	const minSumValue = minArray.reduce((total, num) => {return total + num});
	const maxSumValue = maxArray.reduce((total, num) => {return total + num});
	alert `Min=${minSumValue} and Max=${maxSumValue}`;
}
findMinAndMax(array);
