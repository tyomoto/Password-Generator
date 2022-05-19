// Variables used Globally
var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers = '1, 2, 3, 4, 5, 6, 7, 8, 9, 0'
var special = '!@#$%^&*()_+{}|:"<>?-=[];,./'

var generateBtn = document.querySelector(".generate");
var textpassword = document.querySelector("#password");

var passwordfinal = "";
var createdpassword = "";

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
            createdpassword = special;
        // special and numbers
        }else if (usespecial && usenumbers && !useuppercase && !uselowercase){
            createdpassword = special.concat(numbers);
        // special and uppercase
        }else if (usespecial && !usenumbers && useuppercase && !uselowercase){
            createdpassword = special.concat(uppercase);
        // special and lowercase
        }else if (usespecial && !usenumbers && !useuppercase && uselowercase){
            createdpassword = special.concat(lowercase);
        // special, numbers, uppercase
        }else if (usespecial && usenumbers && useuppercase && !uselowercase){
            createdpassword = special.concat(numbers, uppercase);
        // special, numbers, lowercase
        }else if (usespecial && usenumbers && !useuppercase && uselowercase){
            createdpassword = special.concat(numbers, lowercase);
        // special, numbers, uppercase, lowercase - ALL 4 TYPES
        }else if (usespecial && usenumbers && useuppercase && uselowercase){
            createdpassword = special.concat(numbers, uppercase, lowercase);
        // numbers
        }else if (!usespecial && usenumbers && !useuppercase && !uselowercase){
            createdpassword = numbers;
        // numbers and uppercase
        }else if (!usespecial && usenumbers && useuppercase && !uselowercase){
            createdpassword = numbers.concat(uppercase);
        // numbers and lowercase
        }else if (!usespecial && usenumbers && !useuppercase && uselowercase){
            createdpassword = numbers.concat(lowercase);
        // numbers, uppercase and lowercase (Letters)
        }else if (!usespecial && usenumbers && useuppercase && uselowercase){
            createdpassword = numbers.concat(uppercase, lowercase);
        // uppercase
        }else if (!usespecial && !usenumbers && useuppercase && !uselowercase){
            createdpassword = uppercase;
        // uppercase and lowercase (Letters)
        }else if (!usespecial && !usenumbers && useuppercase && uselowercase){
            createdpassword = uppercase.concat(lowercase);
        // lowercase
        }else if (!usespecial && !usenumbers && !useuppercase && uselowercase){
            createdpassword = lowercase;
        }else{
            alert("Uh oh, something went terribly wrong!")
        }
        console.log(createdpassword);
        return createdpassword;
    }
    
    for (var i = 0; i <= passwordLength; i++){
        var randomizer = Math.floor(Math.random() * createdpassword.length);
        passwordfinal = createdpassword.charAT(randomizer);
        console.log(passwordfinal);
    }

    textpassword.value = passwordfinal;

}


// Listener event to button
generateBtn.addEventListener("click", startPassword);
