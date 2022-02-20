import { mouvementsFou, pyramide } from "../main/03-difficile"

describe('should compute bishop moves correctly', () => {
    it('from [4, 4] the available cells are [[5,5],[6,6],[7,7],[8,8],[5,3],[6,2],[7,1],[3,5],[2,6],[1,7],[3,3],[2,2],[1,1]]',
        () => {
            let expected = expect(mouvementsFou(4, 4))
            expected.toHaveLength(13)
            expected.toEqual(expect.arrayContaining([
                [5, 5], [6, 6], [7, 7], [8, 8], [5, 3], [6, 2], [7, 1], [3, 5], [2, 6], [1, 7], [3, 3], [2, 2], [1, 1]
            ]))
        }
    )

    it('from [1, 1] the available cells are [[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8]]',
        () => {
            let expected = expect(mouvementsFou(1, 1))
            expected.toHaveLength(7)
            expected.toEqual(expect.arrayContaining([
                [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8]
            ]))
        }
    )

    it('from [4, 1] the available cells are [[5,2],[6,3],[7,4],[8,5],[3,2],[2,3],[1,4]]',
        () => {
            let expected = expect(mouvementsFou(4, 1))
            expected.toHaveLength(7)
            expected.toEqual(expect.arrayContaining([
                [5, 2], [6, 3], [7, 4], [3, 2], [2, 3], [1, 4], [8, 5]
            ]))
        }
    )

    it('from [2, 5] the available cells are [[3,6],[4,7],[5,8],[3,4],[4,3],[5,2],[6,1],[1,6],[1,4]]',
        () => {
            let expected = expect(mouvementsFou(2, 5))
            expected.toHaveLength(9)
            expected.toEqual(expect.arrayContaining([
                [3, 6], [4, 7], [5, 8], [3, 4], [4, 3], [5, 2], [6, 1], [1, 6], [1, 4]
            ]))
        }
    )
})

describe('should display a pretty pyramid', () => {
    it('should display a little summit',
        () => expect(pyramide(1)).toEqual(["*"])
    )
    it('should display a 3 steps pyramid',
        () => expect(pyramide(3)).toEqual(["  *  ", " *** ", "*****"])
    )
    it('should display a 5 steps pyramid',
        () => expect(pyramide(5)).toEqual(["    *    ", "   ***   ", "  *****  ", " ******* ", "*********"])
    )
})
