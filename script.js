// // Convert Celsius to Fahrenheit

// function convertCtoF(celsius) {
// 	return (fahrenheit = (celsius * 9) / 5 + 32);
// }
// console.log(convertCtoF(30));
// console.log(convertCtoF(-30));
// console.log(convertCtoF(0));
// console.log(convertCtoF(20));
////////////////////////////////////////////////////////////////////////////////////////
//Reverse a String

// //By method
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// //By loop
// function reverseString(str) {
// 	//Step 1. Create an empty string that will host the new created string
// 	let newString = "";

// 	//Step 2. Create the FOR loop. The Starting point of the loop will be (str.length - 1)  which corresponds to the last character of the string "o". As long as i is greater than or equals 0, the loop will go on. We decrement i after each iteration.
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		newString += str[i];
// 		// console.log(newString);
// 	}
// 	return newString;
// }

// console.log(reverseString("hello"));

// By recursion

// function reverseString(str) {
// 	// return str.charAt(0);
// 	// return str.substr(1);
// 	if (str === "") {
// 		return "";
// 	} else {
// 		return reverseString(str.substr(1)) + str.charAt(0);
// 	}
// }

// console.log(reverseString("hello"));
////////////////////////////////////////////////////////////////////////////////////

//Factorialize a Number

// With Recursion

// function factorialize(num) {
// 	if (num < 0) {
// 		//if the number is less than 0, reject it.
// 		return -1;
// 	} else if (num === 0) {
// 		//If the number is 0, its factorial is 1.
// 		return 1;
// 	} else {
// 		return num * factorialize(num - 1);
// 		/*
//         First Part of the recursion method
//         You need to remember that you won’t have just one call, you’ll have several nested calls

//         Each call: num === "?"        	         num * factorialize(num - 1)
//         1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
//         2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
//         3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
//         4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
//         5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)

//         Second part of the recursion method
//         The method hits the if condition, it returns 1 which num will multiply itself with
//         The function will exit with the total value

//         5th call will return (5 * (5 - 1))     // num = 5 * 4
//         4th call will return (20 * (4 - 1))    // num = 20 * 3
//         3rd call will return (60 * (3 - 1))    // num = 60 * 2
//         2nd call will return (120 * (2 - 1))   // num = 120 * 1
//         1st call will return (120)             // num = 120

//         If we sum up all the calls in one line, we have
//         (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
//         */
// 	}
// }

// console.log(factorialize(5));

// Factorialize a Number with a WHILE Loop

// function factorialize(num) {
// 	// Step 1. Create a variable result to store num
// 	let result = num;

// 	if (num === 0 || num === 1) {
// 		return 1;
// 	}

// 	// Step 2. Create the WHILE loop
// 	while (num > 1) {
// 		num--; //decremetion by 1 at each iteration
// 		result *= num;
// 		/*
//                     num           num--      let result      result *= num
//     1st iteration:   5             4            5             20 = 5 * 4
//     2nd iteration:   4             3           20             60 = 20 * 3
//     3rd iteration:   3             2           60            120 = 60 * 2
//     4th iteration:   2             1          120            120 = 120 * 1
//     5th iteration:   1             0          120
//     End of the WHILE loop
//     */
// 	}
// 	return result;
// }

// console.log(factorialize(5));

// Factorialize a Number with a FOR loop

// function factorialize(num) {
// 	if (num === 0 || num === 1) {
// 		return 1;
// 	}

// 	// We start the FOR loop with i = 4
// 	// We decrement i after each iteration
// 	for (let i = num - 1; i >= 1; i--) {
// 		num *= i;
// 	}
// 	/*
//                     num      var i = num - 1       num *= i         i--       i >= 1?
//     1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes
//     2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
//     3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes
//     4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no
//     5th iteration: 120               0                120
//     End of the FOR loop
//     */
// 	return num;
// }

// console.log(factorialize(5));
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Find the Longest Word in a String
// function findLongestWordLength(str) {
// 	const arr = str.split(" ");
// 	let longestWord = arr[0];
// 	for (const word of arr) {
// 		if (word.length > longestWord.length) {
// 			longestWord = word;
// 		}
// 	}
// 	console.log(longestWord);
// 	return longestWord;
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Return Largest Numbers in Arrays
// With for LOOPS
// function largestOfFour(arr) {
// 	let arrWithLargestNumbers = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		let largestNumber = arr[i][0];
// 		for (let j = 1; j < arr[i].length; j++) {
// 			if (arr[i][j] > largestNumber) {
// 				largestNumber = arr[i][j];
// 			}
// 		}
// 		arrWithLargestNumbers.push(largestNumber);
// 	}
// 	console.log(arrWithLargestNumbers);
// 	return arrWithLargestNumbers;
// }

// largestOfFour([
// 	[4, 5, 1, 3],
// 	[13, 27, 18, 26],
// 	[32, 35, 37, 39],
// 	[1000, 1001, 857, 1],
// ]);

// With Map(), Reduce()
// function largestOfFour(mainArr) {
// 	// Step 1. Map over th main arrays
// 	return mainArr.map((subArray) => {
// 		// Step 2. Grab the largest numbers for each sub -arrays with reduce() method
// 		return subArray.reduce((previousLargestNum, currentLargestNum) => {
// 			return currentLargestNum > previousLargestNum
// 				? currentLargestNum
// 				: previousLargestNum;
// 		}, 0); // 0 serves as the context for the first pLN in each sub array
// 	});
// }

// console.log(
// 	largestOfFour([
// 		[4, 5, 1, 3],
// 		[13, 27, 18, 26],
// 		[32, 35, 37, 39],
// 		[1000, 1001, 857, 1],
// 	])
// );

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Confirm the Ending
// With substr()

// function confirmEnding(string, target) {
// 	//Step 1. Use substr method
// 	// If the target.length is negative, the substr() method will start the counting from the ebd of the string
// 	return string.substr(-target.length) === target ? true : false;
// }

// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("Congratulation", "on"));

// With endWith()

// function confirmEnding(string, target) {
// 	return string.endsWith(target);
// }

// console.log(confirmEnding("Open sesame", "same"));
// console.log(confirmEnding("Open sesame", "game"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Repeat a String Repeat a String

// With For Loop

// function repeatStringNumTimes(str, num) {
// 	let repeatedStr = "";
// 	for (let i = 0; i < num; i++) {
// 		repeatedStr += str;
// 	}
// 	return repeatedStr;
// }

// console.log(repeatStringNumTimes("abc", 3));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Truncate

// function truncateString(str, num) {
// 	return str.length > num ? `${str.slice(0, num)}...` : str;
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// const str = "The quick brown fox jumps over the lazy dog.";

// console.log(str.slice(31));
// Expected output: "the lazy dog."

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Finders Keepers
// function findElement(arr, func) {
// 	for (let num in arr) {
// 		if (func(arr[num])) {
// 			return arr[num];
// 		}
// 	}
// }

// console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
// console.log(
// 	findElement([1, 3, 5, 8, 9, 10], function (num) {
// 		return num % 2 === 0;
// 	})
// );
// console.log(
// 	findElement([1, 3, 5, 9], function (num) {
// 		return num % 2 === 0;
// 	})
// );

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //Boo who

// function booWho(bool) {
// 	return bool === true || bool === false ? true : false;
// }

// console.log(booWho(null));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Title Case a Sentence
// function titleCase(str) {
// 	let arr = str.toLowerCase().split(" ");
// 	let newArray = [];
// 	for (let word of arr) {
// 		newArray.push(word[0].toUpperCase() + word.slice(1));
// 	}
// 	return newArray.join(" ");
// }

// console.log(titleCase("I'm a little tea pot"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Slice and Splice

// function frankenSplice(arr1, arr2, n) {
// 	let startEl = arr2.slice(0, n);
// 	let endEl = arr2.slice(n);
// 	let result = [...startEl, ...arr1, ...endEl];
// 	return result;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // should return [4, 1, 2, 3, 5, 6]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Falsy Bouncer

//With for Loop
// function bouncer(arr) {
// 	let newArr = [];
// 	for (let el of arr) {
// 		if (Boolean(el)) {
// 			newArr.push(el);
// 		}
// 	}
// 	return newArr;
// }

// console.log(bouncer([7, "ate", "", false, 9]));

// With filter

// function bouncer(arr) {
// 	return arr.filter(Boolean);
// }

// console.log(bouncer([7, "ate", "", false, 9]));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Where do I Belong

// function getIndexToIns(arr, num) {
// 	arr.sort((a, b) => a - b);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (num <= arr[i]) {
// 			return i;
// 		}
// 	}
// 	return arr.length;
// }

// console.log(getIndexToIns([40, 60], 50)); // should return 1
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
// console.log(getIndexToIns([5, 3, 20, 3], 5));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Mutations

// with for loop and indexOf

// function mutation(arr) {
// 	let firstWord = arr[0].toLowerCase();
// 	let secondWord = arr[1].toLowerCase();

// 	for (let i = 0; i < secondWord.length; i++) {
// 		if (firstWord.indexOf(secondWord[i]) === -1) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// With split() includes() every()

// function mutation(arr) {
// 	let firstWord = arr[0].toLowerCase().split("");
// 	let secondWord = arr[1].toLowerCase().split("");

// 	return secondWord.every((letter) => {
// 		return firstWord.includes(letter);
// 	});
// }

// console.log(mutation(["hello", "hey"])); // should return false
// console.log(mutation(["hello", "Hello"])); // should return true

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Chunky Monkey

// function chunkArrayInGroups(arr, size) {
// 	let chunkyArr = [];

// 	while (arr.length) {
// 		chunkyArr.push(arr.splice(0, size));
// 	}
// 	return chunkyArr;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
