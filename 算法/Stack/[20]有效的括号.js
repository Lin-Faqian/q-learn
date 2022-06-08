/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length <= 1) return false
  let segObj = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  let stack = []
  let leftSeg = Object.keys(segObj)
  if (!s) return false
  for (let i = 0; i < s.length; i++) {
    let str = s.charAt(i)
    if (leftSeg.some(j => j == str)) {
      stack.push(s.charAt(i))
      continue
    }
    if (str === segObj[stack[stack.length - 1]]) {
      stack.pop()
    } else {
      return false
    }
  }
  return !stack.length
};

/**
 *  执行用时：52 ms, 在所有 JavaScript 提交中击败了97.15%的用户
 *  内存消耗：41.7 MB, 在所有 JavaScript 提交中击败了18.01%的用户通过测试用例：91 / 91
 */