// for this assignment count down from 50 to 0 by 5's 
function blastOffTimer(){
  console.log("blastOffTimer() started");
    var currTime = 50;
    var i = 5
    var timeMulti =2500
    document.getElementById("blastOffText").innerHTML = currTime;
    currTime= currTime -i;
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, 2*timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, 3*timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, 4*timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, 5*timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, 6*timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, 7*timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, 8*timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, 9*timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = "Blastoff!!!";
        currTime= currTime -i;
    }, 10*timeMulti); 
}
function playCraps(){
    console.log("playCraps() started");
    var Die1= Math.ceil(6 * Math.random);
    var Die2= Math.ceil(6 * Math.random);
    var Sum = Die1 + Die2;
    document.getElementById("Die1results").innerHTML= Die1;
    document.getElementById("Die2results").innerHTML= Die2;
    document.getElementById("Sumresults").innerHTML= Sum;
    if(Sum ==7 || Sum ==11){
        document.getElementById("Crapsresults").innerHTML= "Craps, you Lose!!!";
    }else{
        document.getElementById("Crapsresults").innerHTML= "Tie please play again";
    }
}

