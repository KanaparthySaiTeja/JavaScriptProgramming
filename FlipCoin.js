const HEAD = 1;
const TAIL = 0;

let toss = Math.floor(Math.random() * 10) % 2;
console.log(toss);
if(toss == TAIL)
    console.log("TAIL")
else
    console.log("HEAD")