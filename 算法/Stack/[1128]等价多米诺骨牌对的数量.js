/** 暴力解法
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs0 = function (dominoes) {
  let target = 0
  for (let i = 0; i < dominoes.length - 1; i++) {
    for (let j = i + 1; j < dominoes.length; j++) {
      if ((dominoes[i][0] == dominoes[j][0] && dominoes[i][1] == dominoes[j][1]) ||
        (dominoes[i][0] == dominoes[j][1] && dominoes[i][1] == dominoes[j][0])
      ) target++
    }
  }
  return target
};

/** 官方解法 --> 数组 + 计数
 * @param {number[][]} dominoes
 * @return {number}
 */
 var numEquivDominoPairs = function(dominoes) {
  const num = new Array(100).fill(0);
  console.log(num)
  let ret = 0;
  for (const domino of dominoes) {
      const val = domino[0] < domino[1] ? domino[0] * 10 + domino[1] : domino[1] * 10 + domino[0];
      console.log(val)
      ret += num[val];
      num[val]++;
  }
  return ret;
};

console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]]))