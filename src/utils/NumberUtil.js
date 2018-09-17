/**
 * 数值工具类
 * YJ create by 2018-14-33
 * @YJ
 */

let NumberUtil = {
  // 根据范围值产生随机数
  getRandom: (minNum, maxNum) => {
    let range = maxNum - minNum
    let rand = Math.random()
    let result = minNum + Math.round(range * rand)
    return result
  }
}
export default NumberUtil