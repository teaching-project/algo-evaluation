/**
 * Programmer une fonction prenant en argument 2 tableaux et qui renvoie un tableau contenant leurs valeurs alternées.
 * 
 * Exemple : [1, 2, 3] et ["apple", "orange", "banana"] renverra : [1, "apple", 2, "orange", 3, "banana"]
 */
export function combine(tableau1, tableau2) {
    let tab = []
    let maxLength = tableau1.length
    if (tableau2.length > tableau1.length) {
        maxLength = tableau2.length
    }
    for (let i = 0; i < maxLength; ++i) {
        if (tableau1.length > i) {
            tab.push(tableau1[i])
        }
        if (tableau2.length > i) {
            tab.push(tableau2[i])
        }
    }
    return tab
}

/**
 * Programmer une fonction prenant en argument un tableau d'éléments et une valeur offset, et qui renvoie un tableau avec les valeurs du tableau en argument décalées de la valeur
 * de offset.
 * 
 * Par exemple : rotate([1, 2, 3, 4, 5], 2) renverra [4, 5, 1, 2, 3] 
 */
export function rotate(tableau, offset) {
    let tab = []
    for (let i = offset; i > 0; --i) {
        tab.push(tableau[tableau.length - i])
    }
    for (let i = 0; i < tableau.length - offset; ++i) {
        tab.push(tableau[i])
    }
    return tab
}

/**
 * Suite de Syracuse
 * 
 * La suite de Syracuse est une suite de nombre (nous avions vu la suite de Fibonacci en cours), calculée en prenant pour chaque élément la moitié de sa valeur s'il est pair
 * et le triple plus 1 s'il est impair. Cette suite est infinie, et nous ne prendrons que les 10 premiers éléments.
 * 
 * Programmer une fonction prenant en argument le nombre pour lequel la suite est calculée et qui renvoie un tableau contenant les 10 premiers éléments de la suite de Syracuse.
 * 
 * Par exemple, pour 14, la suite sera : [14, 7, 22, 11, 34, 17, 52, 26, 13, 40]
 * Pour 1, la suite sera : [1, 4, 2, 1, 4, 2, 1, 4, 2, 1]
 */
export function syracuse(nombre) {
    let tab = []
    let element = nombre
    for (let i = 0; i < 10; ++i) {
        tab.push(element)
        if (element %2 === 0) {
            element = element / 2
        } else {
            element = 3 * element + 1
        }
    }
    return tab
}
