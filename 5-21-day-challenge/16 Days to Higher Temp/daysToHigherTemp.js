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
  let results = [];
  dailyHighs.map((e, index, a) => {
    for (let i = index + 1; i < a.length; i++) {
      if (a[i] > e) {
        results.push(i);
        break;
      } else {
        results.push(0);
      }
    }
  });
  return results;
}
let dailyHighs = [50, 55, 53, 52, 60, 65, 63];
console.log(daysToHigherTemp(dailyHighs));
