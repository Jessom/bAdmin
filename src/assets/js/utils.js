/*
* @Author: watasi
* @Date:   2018-05-30 10:31:22
* @Last Modified by:   watasi
* @Last Modified time: 2018-06-08 16:19:42
*/

/**
 * 随机生成密码函数
 * @param  {Number} min 密码最小长度
 * @param  {Number} max 密码最大长度
 * @return {[type]}     [description]
 */
export const randPassword = (min = 6, max = 16) => {
	const text = [
		'abcdefghijklmnopqrstuvwxyz',
		'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		'1234567890'
	]
	let len = rand(min, max)
	let pw = ''
	for(let i = 0; i < len; i++) {
		let strpos = rand(0, text.length - 1)
		pw += text[strpos].charAt(rand(0, text[strpos].length))
	}

	return pw
}

/**
 * 生成两个数字之间随机数
 * @param  {[type]} min 最小长度
 * @param  {[type]} max 最大长度
 * @return {[type]}     [description]
 */
export const rand = (min, max) => {
	return min + Math.floor(Math.random() * (max - min + 1))
}
