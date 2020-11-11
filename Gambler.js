const win = 1;
const loss = 0;
let money = 100;
let Win_Count = 0;
let Lost_Count = 0;
let bet_made = 0;

while(money != 0 && money != 200){
    let toss = Math.floor(Math.random() * 10) % 2;
    bet_made++;
    if(toss == win){
        money = money + 1;
        Win_Count++;
    }
    else{
        money = money - 1;
        Lost_Count++
    }
}

if(money == 200){
  console.log("Won the bet")
  console.log("Win Count : "+Win_Count)
  console.log("Count of bet made : "+bet_made)
}else {
    console.log("Lost the bet")
}