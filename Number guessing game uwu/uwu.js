const minNum = 1;
const maxNum = 100;
const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let guess;
let isRunning = true;
let attempt = 0;


while(isRunning){
    guess = window.prompt(`Enter your guess btween ${minNum}  to ${maxNum}`);
    guess = Number(guess);


    if(isNaN(guess)){
        window.alert("pls enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Pls enter a valid number")
    }
    else{
        attempt++;
        if(guess > randomNum){
            window.alert("Too high, guess again :3")
        }
        else if(guess < randomNum){
            window.alert("Too low, guess again :3")
        }
        else{
            window.alert(`Your guess was correct. It took you ${attempt}`)
        }
    }
}

console.log("exited the loop")