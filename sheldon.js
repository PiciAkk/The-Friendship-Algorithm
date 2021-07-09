/*
 * the BiG BANG THEORY
 * Season 2, Episode 13
 * The Friendship Algorithm
 * Originally made by marklreyes
 * Forked by PiciAkk
 */
const readline = require('readline-sync');
var Sheldon = (function () {
    var shareMeal = function () {
          letsEat = readline.question('Would you like to share a meal? Yes or no?\n').toLowerCase()
        if (letsEat == 'yes') {
            excellent = console.log("Excellent. Let's dine together and begin our friendship!");
            return excellent;
        } else {
            shareDrink();
        }
    };

    var shareDrink = function () {
        letsDrink = readline.question('Alright, do you enjoy a hot beverage? Yes or no?\n').toLowerCase()
        if (letsDrink == 'yes') {
            popChoices = readline.question('Excellent. Popular choices include tea, coffee, cocoa?\n').toLowerCase()
            switch (popChoices) {
            case "tea":
                console.log("Let's have " + popChoices + "together and begin our friendship!");
                break;
            case "coffee":
                console.log("Let's have " + popChoices + " together and begin our friendship!");
                break;
            case "cocoa":
                console.log("Let's have " + popChoices + " together and begin our friendship!");
                break;
            default:
                console.log("I'm sorry , I don't do " + popChoices + ". What about a recreational activity? I bet we share some common interests!");
                shareInterest();
                break;
            }
        } else {
            console.log("What about a recreational activity? I bet we share some common interests!");
            shareInterest();
        }
    };

    var shareInterest = function () {
        //Since Sheldon will say no to everything, this object is absolutely false.
        var sheldonsInterests = false;

        //Create the replied interests and the array it will be assigned to.
        var yourInterests;

        //Sheldon won't agree with you, period.
        if (yourInterests === sheldonsInterests) {
            //This doesn't need to be here but wishful thinking doesn't hurt.
            console.log("Why don't we do that together? Let's partake in " + yourInterests + " and begin our friendship!");
        } else {

            //Create the array that the interests will be assigned to.
            var collectResponses = [];

            //Howard's loop counter.
            var n = 0;
            while (n < 10) {
                n++;
                yourInterests = readline.question('Tell me an interest of yours!\n').toLowerCase()
                //Update the resonse and store it into the collection
                collectResponses.push(yourInterests);
                console.log("Really, " + yourInterests + "?! I don't do " + yourInterests + ".");

                if (n > 6) {
                    //Randomly choose the least objectionable interest.
                    //I don't know what goes on in Shelly's mind so let's randomly choose.
                    var shellysRandomChoice = collectResponses[Math.floor(Math.random() * collectResponses.length)];
                    console.log("Why don't we do that together? Let's partake in " + shellysRandomChoice + " and begin our friendship!");
                    break;
                }
            }
        }
    };

    return {
        ask: function () {
            shareMeal();
        }
    };
})();

Sheldon.ask()
