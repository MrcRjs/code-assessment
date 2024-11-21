# Unique Ways to Climb a Stairs

You are tasked with solving the following problem:

You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 step or 2 steps. In how many distinct ways can you reach the top?

Write a function that calculates the number of distinct ways to reach the top of the staircase, given that you can either take 1 step or 2 steps at a time. The function should be optimized to handle large values of n (up to 10^6).

Function Signature(index.js):
```Javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // Write your implementation on index.js
};
```

Example 1:

```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

Example 2:

```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```
 

Constraints:

- `1 <= n <= 10^6`
- You must optimize for both time and space efficiency.