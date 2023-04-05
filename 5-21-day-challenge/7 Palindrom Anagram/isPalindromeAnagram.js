/*
Prompt

Given a string, return true if the letters 
can be re-arranged to make a palindrome using every letter. 
Otherwise, return false.

Example 1: returns true
'nelloneo' // leonnoel


*/

function isPalindromeAnagram(s) {
  let str = s.split("");
  let charMap = {};
  str.forEach((char) =>
    charMap[char] ? charMap[char]++ : (charMap[char] = 1)
  );
  let altCharMap = { ...charMap };

  for (let char in altCharMap) {
    if (altCharMap[char] === 1) {
      delete altCharMap[char];
    }
  }
  if (
    Object.keys(altCharMap).length === Object.keys(charMap).length - 1 ||
    Object.keys(altCharMap).length === Object.keys(charMap).length
  ) {
    return Object.values(altCharMap).every((e) => e === 2);
  }
}

console.log(isPalindromeAnagram("nelloneow"));
