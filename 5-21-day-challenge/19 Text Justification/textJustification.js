/*

Prompt

Given an array of words (no leading or trailing whitespace) and the length of a line, format these words in to lines that each are lineLength long and meet the following criteria:

At least one space must be between each pair of words on a single line
The first character of the first word on a line must be the first character on that line
If there is more than one word on a line, the last character of the last word must be last on that line
If extra spaces are needed to fill the line up to the proper length, they must be evenly distributed between the words
For example:

words: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
lineLength: 12

Generates:

[
  "The    quick",
  "brown    fox",
  "jumps   over",
  "the lazy dog"
]

This problem works much better if you break it down into smaller problems, 
such as formatting a single line first and testing that thoroughly before 
trying to move on to the next batch of words. In fact, we would recommend 
starting with a test case that only fits in one line, to avoid dealing 
with the logic of breaking the line apart.
*/

function textJustification(words, lineLength) {
  const rows = [[]];

  // Define letter count for initial row (required for first pass)
  rows[0].letters = 0;

  // Iterate through our array of words
  for (let word of words) {
    // Access the current row (during first pass, this is the only row)
    let currentRow = rows[rows.length - 1];

    // Compare line length against combined length of current row,
    // and decide whether to create and re-assign new row
    if (
      currentRow.length &&
      currentRow.letters + currentRow.length + word.length > lineLength
    ) {
      rows.push([]);
      currentRow = rows[rows.length - 1];
      currentRow.letters = 0;
    }

    // Push word to current row (either new or existing, depending on previous condition)
    currentRow.push(word);

    // Assign letter count to existing row for next pass
    currentRow.letters += word.length;
  }

  // Iterate through our pre-processed rows
  for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
    let currentRow = rows[rowIdx];

    if (currentRow.length === 1 || rowIdx === rows.length - 1) {
      rows[rowIdx] =
        currentRow.join(" ") +
        " ".repeat(lineLength - currentRow.letters - currentRow.length + 1);
      continue;
    }

    // Handle spacing ("justification") of letters
    let line = currentRow[0];
    const spaces = lineLength - currentRow.letters;
    const minSpaces = " ".repeat(Math.floor(spaces / (currentRow.length - 1)));
    const addSpace = spaces % (currentRow.length - 1);

    // Assign spacing for each word in current row
    for (let wordIdx = 1; wordIdx < currentRow.length; wordIdx++) {
      line +=
        minSpaces + (wordIdx <= addSpace ? " " : "") + currentRow[wordIdx];
    }

    // Re-assign current row to joined + spaced version
    rows[rowIdx] = line;
  }

  // Return processed array of justified sentences
  return rows;
}
