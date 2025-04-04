function firstNonRepeatedChar(str) { 
  const charMap = new Map();

  // Count character frequency
  for (let char of str) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  // Find the first non-repeated character
  for (let char of str) {
    if (charMap.get(char) === 1) {
      return char;
    }
  }

  return null;
}


const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
