/*

Prompt

Given an array of daily high temperatures for a city, produce a new array as output where each 
value is the number of days forward that has a temperature higher than this day. 
All of the temperature values are normal earth temperatures.


For example, if the daily highs are [50, 55, 53, 52, 60, 65, 63], 
then the result should be [ 1,  3,  2,  1,  1,  0,  0]. 
The last two values are special cases because there are no days in the future predicted to be hotter.

  */

function daysToHigherTemp(dailyHighs) {
  const output = [];

  for (let day = 0; day < dailyHighs.length; day++) {
    const highTemp = dailyHighs[day];
    let count = 0;

    // Now loop forward from the day after and look for a higher
    // temperature.
    for (let i = day + 1; i < dailyHighs.length; i++) {
      if (dailyHighs[i] > highTemp) {
        // If we find one, record how many days forward we
        // had to look and then break out of this loop.
        count = i - day;
        break;
      }
    }

    // Add the count to the output.
    output.push(count);
  }

  return output;
}
let dailyHighs = [50, 55, 53, 52, 60, 65, 63];
console.log(daysToHigherTemp(dailyHighs));
