
function diceRoll(){
    const numOfDice = document.getElementById("numOfDice").value;
    const result = document.getElementById("result");
    const diceImg = document.getElementById("diceImg");
    const values = [];

    for (let i = 0; i < 1; i++){
        diceImg.innerHTML = "";
        for (let i = 0; i < numOfDice; i++){

            


            const value = Math.floor((Math.random() * 6) + 1);
            values.push(value);
            
            console.log(values)

            const img = document.createElement("img")
            img.src = `images/${value}.png`;
            diceImg.appendChild(img)
        }
        
    }
    
        


    result.textContent = `Dice: ${values.join(", ")}`;


}