function PAR_IMPAR(x) {
    return x%2==0;
}

export function exe6(value) {
    /* Faça uma função PAR_IMPAR(x) que recebe um valor inteiro
     * e verifica se o valor é par ou ímpar. A função deve
     * retornar um valor booleano.
     */
    value=parseInt(value);
    const results=PAR_IMPAR(value);
    console.log(results);
    return results;
}