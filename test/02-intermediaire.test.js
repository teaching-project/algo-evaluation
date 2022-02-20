import { combine, rotate, syracuse } from "../main/02-intermediaire"

describe('should combine the arrays', () => {
    test('[1, 2, 3] combined to ["apple", "orange", "banana"]', () => expect(combine([1, 2, 3], ["apple", "orange", "banana"])).toEqual([1, "apple", 2, "orange", 3, "banana"]))
    test('(optional) [1, 2, 3] combined to ["apple", "orange", "banana", "strawberry", "pineapple"]', () => expect(combine([1, 2, 3], ["apple", "orange", "banana", "strawberry", "pineapple"])).toEqual([1, "apple", 2, "orange", 3, "banana", "strawberry", "pineapple"]))
})

describe('should rotate the array', () => {
    test('rotate([1, 2, 3, 4, 5], 2) is [4, 5, 1, 2, 3]', () => expect(rotate([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]))
    test('rotate([10, 49, 28, 8, 3, 9, 45], 4) is [8, 3, 9, 45, 10, 49, 28]', () => expect(rotate([10, 49, 28, 8, 3, 9, 45], 4)).toEqual([8, 3, 9, 45, 10, 49, 28]))
})

describe('should compute the syracuse sequence', () => {
    test('syracuse(14) is [14, 7, 22, 11, 34, 17, 52, 26, 13, 40]', () => expect(syracuse(14)).toEqual([14, 7, 22, 11, 34, 17, 52, 26, 13, 40]))
    test('syracuse(1) is [1, 4, 2, 1, 4, 2, 1, 4, 2, 1]', () => expect(syracuse(1)).toEqual([1, 4, 2, 1, 4, 2, 1, 4, 2, 1]))
})
