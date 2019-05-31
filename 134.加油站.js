/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let len = gas.length;
  for (let i = 0; i < len; i++) {
    let current = i;
    let next = (current + 1) % len;
    let currentGas = gas[current];
    while (next !== i && currentGas >= cost[current]) {
      currentGas -= cost[current];
      currentGas += gas[next];
      current = next;
      next = (next + 1) % len;
    }
    if (next === i && currentGas >= cost[current]) {
      return i;
    }
  }
  return -1;
};
