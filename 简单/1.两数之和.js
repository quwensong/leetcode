/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。

     

    示例 1：

    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
    示例 2：

    输入：nums = [3,2,4], target = 6
    输出：[1,2]
    示例 3：

    输入：nums = [3,3], target = 6
    输出：[0,1]
     

    提示：

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    只会存在一个有效答案
     

    进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？

 */

/**
 * 我们遍历到数字 a 时，用 target 减去 a，就会得到 b，若 
b 存在于哈希表中，我们就可以直接返回结果了。若 
b 不存在，那么我们需要将 
a 存入哈希表，好让后续遍历的数字使用。

知识点：
map对象中存放的是{key,value}键值对
has(key)方法判断map中是否存在key，返回boolen值
get(key)方法返回map中的value值

解题过程：
1.用map来存放{数组元素值，坐标}这样的键值对
2.运用逆向解法，即用target减去数组中的某个元素，然后来判断map中是否有相同的值，若有则存在满足条件的答案，返回两个坐标即可；若没有，则保存{数组中某个元素值，对应的坐标}到map对象中。依次遍历即可判断是否有满足条件的两个元素。

著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// https://leetcode.cn/problems/two-sum/solution/qiao-yong-jszhong-de-mapdui-xiang-by-ber-qegl/
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const sub = target - nums[i];
    if (map.has(sub)) {
      return [map.get(sub), i];
    }
    map.set(nums[i], i);
  }
};

const twoSum = (nums, target) => {
  const map = new Map();
  for (const [index, num] of nums.entries()) {
    const sub = target - num;
    if (map.has(sub)) {
      return [map.get(sub), index];
    }
    map.set(num, index);
  }
};

