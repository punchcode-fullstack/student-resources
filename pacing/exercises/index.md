## Meta:

- this is for the daily ~10 min exercise (2 exercises in total)

1. should be an easy win
2. should ge them critically thinking about the concept the day before

- BASE denotes a base template to use for a particular thing (ie a jasmine unit test, a react sandbox, etc...)

### Below is an example of a codepen in js during day 2 of js learning (this concept can be extrapolated to css, html, react, etc...)

- note how the first one is an easy win (getting the length of an array or string)
- the next one deals with nested objects and array data structures



```js
describe('should get item count in strings and arrays', () => {
	const arr = [1,2,3]
	const name = 'Mark'
	const arrLen = null
	const nameCharCount = null

	it('should get proper item count of array', () => {
		expect(arrLen).toEqual(3)
	})
	it('should get proper character count of string', () => {
		expect(nameCharCount).toEqual(4)
	})
})

describe('should get properties of nested arrays and objects', () => {
	const obj = {
		liquid: {
			type: 'water'
		}
	}
	const arr = [1, {id: 52}]
	const liquidType = null
	const id = null
	it('should get property of nested object', () => {
		expect(liquidType).toEqual('water')
	})
	it('should get properties inside of arrays', () => {
		expect(id).toEqual(52)
	})
})
```



## Collection:

https://codepen.io/collection/XJrMxG


## BASE jasmine to use for js unit tests

https://codepen.io/punchcode/pen/qBZWYLo

## week 1 day 2:

https://codepen.io/punchcode/pen/ZEWeGxJ

## week 1 day 2 solution:

https://codepen.io/punchcode/pen/eYZvNVG

## week 1 day 3:

https://codepen.io/punchcode/pen/VwapQdq

## week 1 day 3 solution:

https://codepen.io/punchcode/pen/LYNWQrJ

## week 2 day 2:

https://codepen.io/punchcode/pen/qBZayKR

## week 2 day 2 solution

https://codepen.io/punchcode/pen/OJNRErg?editors=1010