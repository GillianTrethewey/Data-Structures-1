/*

Prompt

Given a two-dimensional array that contains only three values, "H" for hallway, "_" for wall, and exactly one "G" for goal. 
This represents a maze. 
The entrance to the maze is always in the top left corner at index 0, 0. 
Return an array which is a list of (row, column) index pairs that represent a path from the entrance to the 
goal such that all of the values are "H". 
No ghosts walking through walls, please. 
Each move must be horizontal or vertical, no diagonals.

Here’s an example maze:

const exampleMaze = [
  ['H', 'H', 'H', '_', '_', 'H', 'H', 'H', 'G'],
  ['H', '_', 'H', '_', '_', 'H', '_', '_', '_'],
  ['H', '_', 'H', 'H', '_', 'H', '_', 'H', 'H'],
  ['_', '_', '_', 'H', '_', 'H', '_', 'H', '_'],
  ['H', 'H', 'H', 'H', '_', 'H', '_', 'H', '_'],
  ['H', '_', '_', 'H', '_', 'H', '_', 'H', 'H'],
  ['H', 'H', '_', '_', '_', 'H', 'H', 'H', '_'],
  ['H', '_', 'H', 'H', 'H', 'H', '_', '_', 'H'],
  ['H', 'H', 'H', '_', '_', 'H', 'H', 'H', 'H'],
];

  */

function mazeSolver(maze) {
  // Remember the path from the start to where we are now.
  const path = [];

  // These are the directions we can go as the change in
  // x and y coordinates.
  const directions = [
    [1, 0], // right
    [-1, 0], // left
    [0, -1], // up
    [0, 1], // down
  ];

  // Remember where we've been so we don't back up.
  const visited = {};

  // A simple helper function to bounds check a location.
  function outOfBounds(x, y) {
    return x < 0 || x >= maze[0].length || y < 0 || y >= maze.length;
  }

  // The main recursive backtracking implementation
  function makeNextMoveFrom(x, y) {
    if (outOfBounds(x, y) || visited[x + "," + y]) {
      // The current location is either out of bounds or previously
      // visited.
      return false;
    }
    if (maze[x][y] === "G") {
      // We found the goal!
      return true;
    }
    if (maze[x][y] === "_") {
      // This location is a wall.
      return false;
    }

    // Mark where we are in the path and that we've visited
    // this location.
    path.push([x, y]);
    visited[x + "," + y] = true;

    // Now iterate through the possible directions and see if we
    // find the goal.
    for (const [dx, dy] of directions) {
      if (makeNextMoveFrom(x + dx, y + dy)) {
        return true;
      }
    }

    // This path didn't work out (otherwise we'd have
    // returned true).
    path.pop();

    return false;
  }

  makeNextMoveFrom(0, 0);

  return path;
}
