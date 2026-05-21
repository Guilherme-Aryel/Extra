class IO {
    constructor(input, output) {
        this.input=input;
        this.output=output;
    }
    
    run(action) {
        this.output.textContent=action(this.input.value);
        this.input.value="";
    }
}

export function setIO(inputSelector, btnSelector, outputSelector, action) {
    const input=document.querySelector(inputSelector);
    const btn=document.querySelector(btnSelector);
    const output=document.querySelector(outputSelector);
    const io=new IO(input, output);
    
    if (!input||!output||!btn) {
        throw new Error("DOM element not found");
    }
    
    input.addEventListener("keydown", e => {
        if (e.key==="Enter") {
            e.preventDefault();
            io.run(action);
        }
    });
    
    btn.addEventListener("click", () => io.run(action));
}