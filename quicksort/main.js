function quickSort(input) {
	if(input.length <= 1) return input;

	pivotIndex = Math.floor(input.length/2);
	var less = [];
	var greater = [];

	for(x in input)
	{
		if(x == pivotIndex)
		{
			continue;
		}

		if(input[x] < input[pivotIndex])
		{
			less.push(input[x]);
		}
		else
		{
			greater.push(input[x]);
		}
	}

	return [].concat(quickSort(less), input[pivotIndex], quickSort(greater));
}

input = []
inputSize = 100
highestInputValue = 100
for (i=0;i<inputSize;i++)
{
	input.push(Math.floor(Math.random()*highestInputValue))
}
//document.writeln(quickSort([1,4,5,6,2,7,9,8]))
document.writeln(quickSort(input))