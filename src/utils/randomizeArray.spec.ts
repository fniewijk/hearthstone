import randomizeArray from './randomizeArray'

// Mock of Math. Always returns the reverse of an array.
const mockMath = Object.create(global.Math)
mockMath.random = () => 0.4
global.Math = mockMath

const mockArray: number[] = [1,2,3,4,5]

test('empty array', () => {
	expect(randomizeArray(mockArray)).toStrictEqual(mockArray)
})

test('immutable', () => {
	const newMockArray = mockArray.concat()
	randomizeArray(newMockArray)
	expect(newMockArray).toStrictEqual(mockArray)
})

test('randomizes', () => {
	const newMockArray = mockArray.concat()
	const output = randomizeArray(newMockArray, true)
	expect(output).toEqual(newMockArray.reverse())
})

test('immutable randomizes', () => {
	const newMockArray = mockArray.concat()
	randomizeArray(newMockArray, true)
	expect(newMockArray).toStrictEqual(mockArray)
})