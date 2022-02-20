/**
 * Programmer une fonction qui renvoie le signe du nombre passé en paramètre :
 * - "POSITIVE" s'il est de signe positif
 * - "NEGATIVE" s'il est de signe négatif
 * - "NUL" s'il est nul
 */
export function signe(nombre) {
    if (nombre === 0) {
        return "NUL"
    } else if (nombre > 0) {
        return "POSITIVE"
    }
    return "NEGATIVE"
}

/**
 * Programmer une fonction prenant en argument un tableau de nombres, et qui renvoie un tableau ne contenant que les nombres pairs.
 * Astuce : un nombre pair est un nombre dont le reste de la division par 2 est 0.
 */
export function nombresPairs(nombres) {
    let pairTab = []
    for (let i = 0; i < nombres.length; ++i) {
        if (nombres[i] %2 === 0) {
            pairTab.push(nombres[i])
        }
    }
    return pairTab
}
