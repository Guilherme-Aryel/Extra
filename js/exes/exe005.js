function POSITIVO_NEGATIVO(x) {
    return x>0
}

export function exe5(value) {
    /* Faça uma função POSITIVO_NEGATIVO(x) que recebe um valor inteiro
     * e verifica se o valor é positivo ou negativo. A função deve
     * retornar um valor booleano.
     */
    value=parseInt(value);
    const results=POSITIVO_NEGATIVO(value);
    console.log(results);
    return results;
}