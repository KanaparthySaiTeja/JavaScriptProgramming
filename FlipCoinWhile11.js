const HEAD = 1;
const TAIL = 0;

let HEAD_WINS = 0;
let TAIL_WINS = 0;
console.log("Head count : "+HEAD_WINS);
console.log("Tail count : "+TAIL_WINS)
while(HEAD_WINS != 11 && TAIL_WINS != 11){
    let toss = Math.floor(Math.random() * 10) % 2;
    if(toss == TAIL){
        console.log("TAIL");
        TAIL_WINS++;
        console.log("Tail count : "+TAIL_WINS)
    }
    else{
        console.log("HEAD");
        HEAD_WINS++
        console.log("Head count : "+HEAD_WINS);
    }
}

if(HEAD_WINS == 11)
  console.log("Head wins")
else
  console.log("Tail wins")
  