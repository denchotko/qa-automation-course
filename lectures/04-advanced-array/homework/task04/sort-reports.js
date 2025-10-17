/**
 * Lecture 04 - Task 04: Order reports with sort
 * Objective:Produce ordered views of data using Array.sort with comparison functions, including index-based sorts and a custom priority order.
 *
 *  * Sorts indices of the input arrays based on corresponding time values.
 * 
 * @param {string[]} names - Array of names (not used in sorting but assumed to align with times).
 * @param {number[]} times - Array of time values corresponding to each name.
 * @returns {number[]} - Array of indices sorted from fastest (lowest time) to slowest (highest time).

*/

export function sortIndicesByTime(names, times) {
  let indices = [];
  for (let i = 0; i < times.length; i++) {
    indices.push(i);
  }
  return indices.slice().sort(function (a, b) {
    return times[a] - times[b];
  });
}
let demoNames = [
  "alpha_test",
  "beta_test",
  "omega_test",
  "test_test1_test2_test3",
];
let demoTimes = [450, 300, 650, 500];

/**
 * Sorts an array of names by their length in ascending order.
 *
 * @param {string[]} names - Array of name strings.
 * @returns {string[]} - New array of names sorted by length.
 */

export function sortNamesByLength(names) {
  return names.slice().sort(function (a, b) {
    return a.length - b.length;
  });
}

//Demonstration sample for each function

// 1) sortIndicesByTime (uses names/times as read-only inputs)
console.log("BEFORE (names/times):", demoNames, demoTimes);
console.log(
  "Indices by time (fast->slow):",
  sortIndicesByTime(demoNames, demoTimes)
);
console.log("AFTER (names/times should be unchanged):", demoNames, demoTimes);
// 2) sortNamesByLength
console.log("BEFORE (names):", demoNames);
console.log("Names by length:", sortNamesByLength(demoNames));
console.log("AFTER (names should be unchanged):", demoNames);
