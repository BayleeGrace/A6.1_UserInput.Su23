//use this to comment on js
//write a function to play CRAPS in index.html
function playCraps() {//the bracket 
    console.log("playCraps() started");//console.log tells the console that we are trying to do something, end wih terminator (;)
    //step 1: roll 2 6-sided dice
    //how to create a variable: use command "var" and = it to what you want it to be
    //ex. var x = "Porsche";
    //a string is x + x = PorschePorsche
    //Math.random()
    var die1;
    var die2;
    die1 = Math.ceil(Math.random() * 6)//I put Math.floor and Math.ceil on both dice so that I remember both functions
        ; //inclusive: includes 0; exclusive: excludes 0
    die2 = Math.floor(6 * Math.random()) + 1; //you can type it either way, 6 in front or behind
    //step 1b print result on screen 
    document.getElementById("die1res").innerHTML = die1;
    document.getElementById("die2res").innerHTML = die2;
    console.log("die1 is:" + die1);
    console.log("die2 is:" + die2);


    //step 2: calculate the sum of die1 and die2
    var dicesum = die1 + die2;
    console.log("The sum of the dice is:" + dicesum);
    document.getElementById("dicesum").innerHTML = dicesum;


    //step 3: does sum = 7 or 11 (are you a loser?)
    //how to do an if/then statement
    /*if(true){
        do this if conditions are true
    }else if(another true){
    }else if(another true), and so on*/
    if (dicesum == 7 || dicesum == 11) {

        (document.getElementById("gameres").innerHTML =
            "You lose! Play again?");
    
//step 4: aid the dice come up doubles? are they evens? if so, you win
    }else if (die1=die2 && die1%2==0){
        (document.getElementById("gameres").innerHTML =
            "You win! Play again?");

    //step 5: otherwise, push
    }else {
        (document.getElementById("gameres").innerHTML =
            "You did not lose or win, so you should try again.");
    }
}


//check creds for strings.html, this will check if the user has an account and if the credentials are correct!
function checkCreds(){
    console.log("checkCreds() started...");
    var firstName;
    var lastName;
    var zipCode;
    var zipCodeNumb;
    var fullName;
    var fullNameLength;
    //this will place the characters under the fName id in the first name variable
    firstName=document.getElementById("fName").value;
    console.log("The first name is inputted as " + firstName);//this reads the first name box

    lastName=document.getElementById("lName").value;
    console.log("The last name is inputted as " + lastName);//this reads the last name box

    zipCode=document.getElementById("zCode").value;
    console.log("The zip code is inputted as " + zipCode);//this reads the zip code box

    zipCodeNumb = parseInt(zipCode);
    console.log("The zip code is " + zipCodeNumb);

    fullName=firstName+ " " +lastName;
    console.log("The full name is inputted as " + fullName);

    fullNameLength=fullName.length;
    console.log("The full name has " + fullNameLength + "characters");

    if(fullName.length > 20 && fullName.length < 3){

        document.getElementById("loginStatus").innerHTML="Invalid name, please try again.";

    } else if(zipCode.length !== 5 && zipCode.numb > 99999 && zipCode.numb < 0){//this says that the zip code MUST equal 5

        document.getElementById("loginStatus").innerHTML="Invalid zip code, please try again.";

    } else{

        alert("User credentials passed, welcome to the site " + fullName + "!");

    }
}





// function test(){
//     console.log("Test conplete");
// }