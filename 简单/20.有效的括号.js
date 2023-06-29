/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成

 */

/**
 * 根据题意，我们可以推断出以下要点：
有效括号字符串的长度，一定是偶数！
右括号前面，必须是相对应的左括号，才能抵消！
右括号前面，不是对应的左括号，那么该字符串，一定不是有效的括号！


 * @param {*} s 
 * @returns 
 */
var isValid = function (s) {
  s = s.split("");
  let sl = s.length;
  // 长度为奇数，直接返回false
  if (sl % 2 !== 0) return false;

  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const stack = [];

  for (let i of s) {
    // map.has(i) 为true时，说明i是右括号
    if (map.get(i)) {
      // stack.at(-1) !== map.get(i) 为true时，说明i是右括号，且与栈顶元素不匹配
      if (stack.at(-1) !== map.get(i)) {
        // 说明不是有效的括号
        return false;
      } else {
        // 说明是有效的括号，将栈顶元素弹出
        stack.pop();
      }
    } else {
      // 说明i是左括号，将i压入栈中
      stack.push(i);
    }
  }
  return stack.length === 0;
};

// 解法2
var isValid = function (s) {
  let len = s.length;
  // 长度为奇数，直接返回false
  if (len % 2 !== 0) {
    return false;
  }

  let length = len / 2;
  //用replace方法，将字符串中的()、{}、[]替换成空字符串，
  //直到字符串中不再包含这些字符，如果最后字符串的长度为0，则说明是有效的括号
  for (let i = 0; i < length; i++) {
    s = s.replace("()", "");
    s = s.replace("{}", "");
    s = s.replace("[]", "");
  }

  return s.length === 0;
};
