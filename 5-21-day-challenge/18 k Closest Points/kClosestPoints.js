/*

Prompt

Given an array of points (x, y) in a two-dimensional space 
find the k closest points to the origin (0, 0).

*/


function kClosestPoints(points, k) {
    // Helper function to apply our euclidian distance formula
    function getDistance([x1, y1], [x2, y2]) {
      return Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));
    }
  
  
    let closestPoints = [];
  
  
    // Iterate through each set of points in our input array and get euc. distance at each step
    for (const [x1, y1] of points) {
      closestPoints.push([getDistance([x1, y1], [0, 0]), [x1, y1]]);
    }
  
    // Use a naive/simple sort and slice to get the (k) closest points to origin
    return closestPoints.sort((a, b) => a[0] - b[0]).slice(0, k).map((point) => point[1]);
  }
