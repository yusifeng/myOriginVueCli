export function shuffle(arr) {
	let _arr = arr.slice()
	for (let i = 0; i < _arr.length; i ++) {
		let j = getRandomInt(0, i)
		let t = _arr[i]
		_arr[i] = _arr[j]
		_arr[j] = t
	}
	return _arr
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export function debounce(func, delay) {
	let timer
	return function (...args) {

		if (timer) {
			console.log('haha')
			clearTimeout(timer)
		}
		timer = setTimeout(() => {
			func.apply(this, args)
		}, delay)
	}
}

export function isPhoneNum(num) {
	let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
	return reg.test(num)
}

export function isNum(num) {
	let reg = /^\d+$/
	return reg.test(num)
}