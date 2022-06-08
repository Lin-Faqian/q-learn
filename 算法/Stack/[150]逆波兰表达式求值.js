/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function (tokens) {
  let target = []
  const fuhao = {
      '+': "+",
      '-': "-",
      '*': "*",
      '/': "/",
  }
  for (let index = 0; index < tokens.length; index++) {
      let f = fuhao[tokens[index]]
      if (!f) {
          target.push(tokens[index])
      } else {
          let tmp
          let lastTwo = target.splice(-2, 2)
          switch (f) {
              case '+':
                  tmp = lastTwo.reduce((pre, cur) => (+pre) + (+cur))
                  break;
              case '-':
                  tmp = lastTwo.reduce((pre, cur) => pre - cur)
                  break;
              case '*':
                  tmp = lastTwo.reduce((pre, cur) => pre * cur)
                  break;
              case '/':
                  tmp = lastTwo.reduce((pre, cur) => pre / cur)
                  tmp = tmp > 0 ? Math.floor(tmp):Math.ceil(tmp) // 这里不这么写可能会造成1左右的误差
                  break;
          }
          target.push(tmp)
      }
  }
  return target[0]
};

/**
 * 执行用时：56 ms, 在所有 JavaScript 提交中击败了99.50%的用户
 * 内存消耗：43.4 MB, 在所有 JavaScript 提交中击败了73.42%的用户
 * 通过测试用例：20 / 20
 */