const VOWELS="aeiou";

function VOGAL(c) {
    let results=(VOWELS.includes(c.toLowerCase()))?1:0;
    console.log(results);
    return results;
}

export function exe2(value) {
    /* Criar uma função VOGAL(c) que receba um caractere como
     * parâmetro e retorne 1 (um) caso seja uma vogal e zero
     * caso não seja.
     */
    if (value.length>1) {
        throw new Error("Only one charactere");
    }
    return VOGAL(value);
}