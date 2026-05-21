function ORDEM(a, b, c) {
    const arr=[a, b, c];
    arr.sort((a, b) => a - b);
    return arr;
}

export function exe4(value) {
    /* Faça uma função ORDEM(a, b, c) que recebe 3 valores
     * inteiros por parâmetro e retorna-os ordenados em
     * ordem crescente.
     */
    if (value.length!==3) {
        throw new Error("Elements quantity");
    }
    
    for (let i=0;i<value.length;i++) {
        value[i]=parseInt(value[i]);
    }
    
    const results=ORDEM(...value);
    console.log(results);
    return results.join(", ");
}