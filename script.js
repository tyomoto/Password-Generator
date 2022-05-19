// Variables used Globally
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "L", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", "'", ")", "_", "+", "{", "}", "|", ":", "<", ">", "?", "-", "=", "[", "]", ";", ",", ".", "/"]

var generateBtn = document.querySelector(".generate");
var textpassword = document.querySelector("#password");

var password;
var passwordfinal = "";
var passwordcharacters = "";

var startPassword = function(){
    
    // prompts
    passwordLength = window.prompt("How many characters do you want in your password (between 8-128)");
    // if user doesn't enter 8-128 characters

    if (!passwordLength){
        alert("There must be a value to continue");
        startPassword();
    }else if (passwordLength <= 7 || passwordLength > 128){
        alert("Number of characters has to be between 8 and 128");
        startPassword();
    }else{
        var uselowercase = window.confirm("Would you like the password to contain lowercase letters?");
        var useuppercase = window.confirm("Would you like the password to contain uppercase letters?");
        var usenumbers = window.confirm("Would you like the password to contain numbers?");
        var usespecial = window.confirm("would you like the password to contain special characters?");
        passwordGenerate();
    };

   

    function passwordGenerate(){
        if (!usespecial && !usenumbers && !useuppercase && !uselowercase){
            alert("Please confirm which character types you would like to include");
            startPassword();

        // just special   
        }else if (usespecial && !usenumbers && !useuppercase && !uselowercase){
            passwordcharacters = special;
        // special and numbers
        }else if (usespecial && usenumbers && !useuppercase && !uselowercase){
            passwordcharacters = special.concat(numbers);
        // special and uppercase
        }else if (usespecial && !usenumbers && useuppercase && !uselowercase){
            passwordcharacters = special.concat(uppercase);
        // special and lowercase
        }else if (usespecial && !usenumbers && !useuppercase && uselowercase){
            passwordcharacters = special.concat(lowercase);
        // special, numbers, uppercase
        }else if (usespecial && usenumbers && useuppercase && !uselowercase){
            passwordcharacters = special.concat(numbers, uppercase);
        // special, numbers, lowercase
        }else if (usespecial && usenumbers && !useuppercase && uselowercase){
            passwordcharacters = special.concat(numbers, lowercase);
        // special, numbers, uppercase, lowercase - ALL 4 TYPES
        }else if (usespecial && usenumbers && useuppercase && uselowercase){
            passwordcharacters = special.concat(numbers, uppercase, lowercase);
        // numbers
        }else if (!usespecial && usenumbers && !useuppercase && !uselowercase){
            passwordcharacters = numbers;
        // numbers and uppercase
        }else if (!usespecial && usenumbers && useuppercase && !uselowercase){
            passwordcharacters = numbers.concat(uppercase);
        // numbers and lowercase
        }else if (!usespecial && usenumbers && !useuppercase && uselowercase){
            passwordcharacters = numbers.concat(lowercase);
        // numbers, uppercase and lowercase (Letters)
        }else if (!usespecial && usenumbers && useuppercase && uselowercase){
            passwordcharacters = numbers.concat(uppercase, lowercase);
        // uppercase
        }else if (!usespecial && !usenumbers && useuppercase && !uselowercase){
            passwordcharacters = uppercase;
        // uppercase and lowercase (Letters)
        }else if (!usespecial && !usenumbers && useuppercase && uselowercase){
            passwordcharacters = uppercase.concat(lowercase);
        // lowercase
        }else if (!usespecial && !usenumbers && !useuppercase && uselowercase){
            passwordcharacters = lowercase;
        }
        console.log(passwordcharacters);
        return passwordcharacters;
    }
    
    
    for (var i = 0; i < passwordLength; i++) {
        var randomizer = Math.floor(Math.random() * passwordcharacters.length);
        passwordfinal += passwordcharacters[randomizer];
        console.log(passwordfinal)
    }
        
    textpassword.value = passwordfinal;

}

// Listener event to button
generateBtn.addEventListener("click", startPassword);
