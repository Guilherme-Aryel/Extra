function LIMITES(li, ls) {
    const evenNumbers=[];
    for (let i=li+1;i<ls;i++) {
        if (i%2==0) evenNumbers.push(i);
    }
    const evenSum=evenNumbers.reduce((acc, curr) => acc + curr, 0)
    return [evenNumbers, evenSum];
}

export function exe3(value) {
    /* Criar uma função LIMITES(li, ls) que leia os limites inferior
     * e superior de um intervalo e imprimir todos os números pares
     * no intervalo aberto e seu somatório. Suponha que os dados
     * digitados são para um intervalo crescente.
     */
    const start=parseInt(value[0]),end=parseInt(value[1]);
    
    if (start>end) {
        throw new Error("start > end");
    }
    
    const results=LIMITES(start, end);
    const evenNumbers=results[0];
    const evenSum=results[1];
    console.log(evenNumbers + "\n" + evenSum);
    return evenNumbers.join(", ") + " " + evenSum;
}