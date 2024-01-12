$(function () {
  //Fisher Yates Shuffle Modern Algorithm
  //Multiple number generator
  //Number Generator Function
  function numberGenerator(numberStart, numberEnd, picks) {
    //The Array
    let numbers = [];
    //Build the array with the for loop.
    for (let i = numberStart; i <= numberEnd; i++) {
        numbers.push(i);
    }

    //The length of the array
    let numbersLength = numbers.length-1;
    //J is the random numbers that generats everytime
    let randomNumbers;
    //temp, is holding the random number temporarily
    let tempNumberHolder;
    //We do not want it to get to the 0 index. The loop will not run the 0 index
    for (i = numbersLength; i > 0; i--) {
      //Random number from 1 to i.
      randomNumbers = Math.floor(Math.random()*(numbersLength+1));
      //Random number position value (index). set to temporarily variable
      tempNumberHolder = numbers[randomNumbers];
      //Get the random number position value and swap it for the position value of the loop.
      numbers[randomNumbers] = numbers[numbersLength];
      //Get the position value of the loop
      numbers[numbersLength] = tempNumberHolder;
    }

    //Picked numbers from the array
    let numberPicked = [];
    //Get the picked numbers from the array
    for (i = numberStart; i <= picks; i++) {
      numberPicked += numbers[i] + ", ";
    }

    //remove the last comma of the string
    //return the numbers picked from the random array
    //does not let me use .sort(function(a, b){return a-b})
    return numberPicked.replace(/,\s*$/, "");
  }
  //Generate Pick3 Game Numbers
  //Pick 3 can have duplicate numbers results
  //Its random numbers but the result can have duplicate numbers.
  //That is why I used Fisher Yates on the other games.
  function pick3Generator (numberStart, numberEnd, picks) {
    //pick 3 game array
    let pick3Numbers = [];
    //pick 3 game random number
    while(pick3Numbers.length < picks) {
      let randomNumber = Math.floor(Math.random()*numberEnd)+numberStart;
      if(pick3Numbers.indexOf(randomNumber) > -1) continue;
      pick3Numbers[pick3Numbers.length] = randomNumber;
    }
    return (pick3Numbers + ", ").replace(/,\s*$/, "");
  }

  //Power Ball Click function
  $('#powerballbutton').click(function (numberStart, numberEnd, picks) {
    //numberGenerator(1,69,5) get replaced by numbersPicked
    let powerBallNumbers = numberGenerator(1,69,5);
    //Result div from html
    let powerBallResults = $("#powerballresults");
    //Change background color when clicked
    //Display the result
    powerBallResults.css("background-color", "rgb(0,128,64)").html(powerBallNumbers);

    //numberGenerator(1,69,5) get replaced by numbersPicked
    let powerBallNumber = numberGenerator(1,26,1);
    //Result div from html
    let powerBallResult = $("#powerballresult");
    //Change background color when clicked
    //Display the result
    powerBallResult.css("background-color", "rgb(0,128,64)").html(powerBallNumber);

    //Send data to Php file
    $.post("php/generatednumbers.php", {powerBallNumbers: powerBallNumbers, powerBallNumber: powerBallNumber},
    function(data, status) {
      console.log(data + " " + status);
    });
  });
  //Pick 5 Click function
  $('#pick5button').click(function () {
    let pick5Numbers = numberGenerator(1,38,5);
    let pick5Results = $('#pick5results');
    pick5Results.css("background-color","rgb(0,128,64)").html(pick5Numbers);

    $.post("php/generatednumbers.php", {pick5Numbers: pick5Numbers},
    function(data, status) {
      console.log(data + " " + status);
    });
  });
  //Mega Millions Click function
  $('#megamillionsbutton').click(function(numberStart, numberEnd, picks) {
    let megaMillionsNumbers = numberGenerator(1,70,5);
    let megaMillionsResults = $("#megamillionsresults");
    megaMillionsResults.css("background-color", "rgb(0,128,64)").html(megaMillionsNumbers);

    let megaBallNumber = numberGenerator(1,25,1);
    let megaBallResults = $("#megaballresults");
    megaBallResults.css("background-color", "rgb(0,128,64)").html(megaBallNumber);

    $.post("php/generatednumbers.php", {megaMillionsNumbers: megaMillionsNumbers, megaBallNumber: megaBallNumber},
    function(data, status) {
     console.log(data + " " + status);
    });
  });
  //Lucky For Life Click function
  $('#luckyforlifebutton').click(function (numberStart, numberEnd, picks) {
    let luckyForLifeNumbers = numberGenerator(1,48,5);
    let luckyForLifeResults = $("#luckyforliferesults");
    luckyForLifeResults.css("background-color","rgb(0,128,64)").html(luckyForLifeNumbers);

    let luckyBallNumber = numberGenerator(1,18,1);
    let luckyBallResults = $("#luckyballresults");
    luckyBallResults.css("background-color", "rgb(0,128,64)").html(luckyBallNumber);

    $.post("php/generatednumbers.php", {luckyForLifeNumbers: luckyForLifeNumbers, luckyBallNumber: luckyBallNumber},
    function(data, status) {
     console.log(data + " " + status);
    });
  });
  //Pick 3 Click function
  $('#pick3button').click(function (numberStart, numberEnd, picks) {
    let pick3Numbers = pick3Generator(1,9,3);
    let pick3Results = $("#pick3results");
    pick3Results.css("background-color", "rgb(0,128,64)").html(pick3Numbers);

    $.post("php/generatednumbers.php", {pick3Numbers: pick3Numbers},
    function(data, status) {
     console.log(data + " " + status);
    });
  });
  //2by2 Click function
  $('#twoby2button').click(function (numberStart,numberEnd,picks) {
    let twoBy2RedNumber = numberGenerator(1,26,2);
    let twoBy2RedResults = $("#twoby2redresults");
    twoBy2RedResults.css("background-color", "rgb(0,128,64)").html(twoBy2RedNumber);

    let twoBy2WhiteNumber = numberGenerator(1,26,2);
    let twoBy2WhiteResults = $("#twoby2whiteresults");
    twoBy2WhiteResults.css("background-color", "rgb(0,128,64)").html(twoBy2WhiteNumber);

    $.post("php/generatednumbers.php", {twoBy2RedNumber: twoBy2RedNumber, twoBy2WhiteNumber: twoBy2WhiteNumber},
    function(data, status) {
     console.log(data + " " + status);
    });
  });
  //Yotta Click function
  $('#yottabutton').click(function(numberStart, numberEnd, picks) {
    let yottaNumbers = numberGenerator(1,70,6);
    let yottaResults = $("#yottaresults");
    yottaResults.css("background-color", "rgb(0,128,64)").html(yottaNumbers);

    let yottaBallNumber = numberGenerator(1,63,1);
    let yottaBallResults = $("#yottaballresults");
    yottaBallResults.css("background-color", "rgb(0,128,64)").html(yottaBallNumber);

    $.post("php/generatednumbers.php", {yottaNumbers: yottaNumbers, yottaBallNumber: yottaBallNumber},
    function(data, status) {
    console.log(data + " " + status);
    });
  });
});
