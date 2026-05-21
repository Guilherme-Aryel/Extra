import { SetIO } from "./set_io.js";
import { exe1 } from "./exes/exe001.js";
import { exe2 } from "./exes/exe002.js";
import { exe3 } from "./exes/exe003.js";
import { exe4 } from "./exes/exe004.js";
import { exe5 } from "./exes/exe005.js";
import { exe6 } from "./exes/exe006.js";

const exes=[exe1, exe2, exe3, exe4, exe5, exe6];
const setIOs=[];

for (let i=1;i<=6;i++) {
    setIOs.push(new SetIO(`.exe${i}-input`, `#exe${i}-btn`, `#exe${i}-output`, exes[i-1]));
}

for (let setIO of setIOs) {
    setIO.init();
}