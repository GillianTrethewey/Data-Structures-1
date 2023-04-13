/*

Prompt

Given a set of characters (guaranteed to be unique) and a minimum and maximum length, 
generate all possible passwords that meet the following criteria:
The same characters cannot appear consecutively
The same character can occur no more than twice in any password


The output should be an array containing the passwords as strings. 
Return an empty array if no valid password can be generated.

  */

function generatePassword(characters, minLength, maxLength) {
  // keep track of passwords as we generate them
  const passwords = [];
  // keep track of the characters as we build a password
  const stack = [];
  // count the characters as we add them so that we don't add more
  // than two of any.
  const counts = {};

  // A recursive helper function will traverse the decision tree
  function addOneCharacter() {
    // If the current stack is long enough, make a string and add
    // it to the output array.
    if (stack.length >= minLength && stack.length <= maxLength) {
      passwords.push(stack.join(""));
    }

    // Base case: We've hit the max length so don't go any further.
    if (stack.length === maxLength) {
      return;
    }

    // The branches from here are the character available.
    for (const c of characters) {
      const count = counts[c] || 0;
      // Except don't use a character we've already used more than twice
      // or matches the last character we just added.
      if ((stack.length == 0 || stack[stack.length - 1] !== c) && count < 2) {
        // Record what we're about to do
        stack.push(c);
        counts[c] = count + 1;

        // Now go down the the next level
        addOneCharacter();

        // Remove this character before going down a different path.
        counts[c]--;
        stack.pop();
      }
    }
  }

  addOneCharacter();

  return passwords;
}
