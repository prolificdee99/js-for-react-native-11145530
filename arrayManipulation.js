function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
  }

  function formatArrayStrings(stringsArray, numbersArray) {
    return stringsArray.map((str, index) => {
        const num = numbersArray[index];
        if (num % 2 === 0) {
            return str.toUpperCase(); // Capitalize if number is even
        } else {
            return str.toLowerCase(); // Convert to lowercase if number is odd
        }
    });
}
