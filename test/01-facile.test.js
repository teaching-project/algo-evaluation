import { nombresPairs, signe } from "../main/01-facile"

describe('should return the correct sign', () => {
    test('18 is positive', () => expect(signe(18)).toEqual("POSITIVE"))
    test('5 is positive', () => expect(signe(5)).toEqual("POSITIVE"))

    test('1004 is positive', () => expect(signe(1004)).toEqual("POSITIVE"))
    test('0 is null', () => expect(signe(0)).toEqual("NUL"))

    test('-18 is negative', () => expect(signe(-18)).toEqual("NEGATIVE"))
    test('-5 is negative', () => expect(signe(-5)).toEqual("NEGATIVE"))

    test('-1004 is negative', () => expect(signe(-1004)).toEqual("NEGATIVE"))

})

describe('should return only even numbers', () => {
    test('among [1, 2, 3, 4, 5, 6] even numbers are [2, 4, 6]', () => expect(nombresPairs([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]))
    test('among [6, 48, 24, 53, 3, 90, 58] even numbers are [6, 48, 24, 90, 58]', () => expect(nombresPairs([6, 48, 24, 53, 3, 90, 58])).toEqual([6, 48, 24, 90, 58]))
    test('among [11, 92, 49, 38, 48, 6, 2] even numbers are [92, 38, 48, 6, 2]', () => expect(nombresPairs([11, 92, 49, 38, 48, 6, 2])).toEqual([92, 38, 48, 6, 2]))
})
