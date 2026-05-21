export class SetIO {
    constructor(inputSelector, btnSelector, outputSelector, action) {
        //allow to use many inputs, but only one button and outpu
        this.inputSelector=inputSelector;
        this.btnSelector=btnSelector;
        this.outputSelector=outputSelector;
        this.action=action;
    }
    
    init() {
        const inputs=document.querySelectorAll(this.inputSelector);
        const btn=document.querySelector(this.btnSelector);
        const output=document.querySelector(this.outputSelector);
        
        if (!inputs.length||!output||!btn) {
            throw new Error("DOM element not found");
        }
        
        inputs[inputs.length-1].addEventListener("keydown", e => {
            if (e.key==="Enter") {
                e.preventDefault();
                this.f(inputs, output);
            }
        });
        
        btn.addEventListener("click", () => this.f(inputs, output));
    }
    
    
    f(inputs, output) {
        let values=[];
        
        for (let input of inputs) {
            if (!input.value) return;
            values.push(input.value)
        }
        
        if (values.length===1) values=values[0];
                
        output.textContent=this.action(values);
        inputs.forEach(i => { i.value=""; });
        values=[];
    }
}