function MAIOR_MENOR(a, b, c, d, e) {
    const list=[a, b, c, d, e];
    let maior=null,menor=null;
    
    for (let i of list) {
        if ((maior===null)||(maior<i)) {
            maior=i;
        }
        if ((menor===null)||(menor>i)) {
            menor=i;
        }
    }
    
    console.log(`maior: ${maior}\nmenor: ${menor}`)
    return [menor, maior];
}

export function exe1(value) {
    /* Faça uma função MAIOR_MENOR(a, b, c, d, e) que leia cinco valores
     * inteiros e imprima o maior e o menor valor.
     */
    if (value.length!==5) {
        throw new Error(
            `Unexpected quantity: expected 5 elements, but ${value.length} was given`
        )
    }
    
    for (let i=0;i<value.length;i++) {
        value[i]=parseInt(value[i]);
    }
    
    value=MAIOR_MENOR(...value);
    const menor=value[0];
    const maior=value[1];
    
    return `maior: ${maior} menor: ${menor}`;
}