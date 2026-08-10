const passwordLength = 5;
const includesUppercase = true;
const includesLowercase = true;
const includesNumbers = true;
const includesSymbols = false;

function generatePassword(passwordLength, includesUppercase, includesLowercase, includesNumbers, includesSymbols){

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()><:|?";

    let allowedChars = "";
    let password = "";
    allowedChars += includesLowercase ? lowercase : "";
    allowedChars += includesUppercase ? uppercase : "";
    allowedChars += includesNumbers ? numbers : "";
    allowedChars += includesSymbols ? symbols : "";

    if (passwordLength <= 4){
        console.log("Password length must be more than or equal to 5 characters");
    }
    if (allowedChars.length <= 0){
        console.log("Atleast 1 set of characters should be selected")
    }

    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;

}

const password = generatePassword(passwordLength,
                                  includesUppercase,
                                  includesLowercase,
                                  includesNumbers,
                                  includesSymbols);

console.log(password)