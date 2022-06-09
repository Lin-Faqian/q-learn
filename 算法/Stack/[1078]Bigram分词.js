/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
 var findOcurrences = function(text, first, second) {
  let textList = text.split(' ')
  let target = []
  for (let index = 0; index < textList.length-2; index++) {
    const one = textList[index]
    const two = textList[index + 1]
    const third = textList[index + 2]
    if(one === first && two === second && third){
      target.push(third)
    }
  }
  return target
};

console.log(findOcurrences("alice is a good girl she is a good student","a","good"))

/**
 * 执行用时：52 ms, 在所有 JavaScript 提交中击败了97.40%的用户
 * 内存消耗：41.2 MB, 在所有 JavaScript 提交中击败了24.68%的用户
 * 通过测试用例：30 / 30
 */