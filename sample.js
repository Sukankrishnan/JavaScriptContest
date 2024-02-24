var mRandom=100;
var userInput=0;
var difference=mRandom-userInput;
console.log("Diff is ",difference);


for(var i=0;i<=10;i++)
{
if(mRandom==userInput)
{
    //document.createElement("p");
   // write.innerHTML="Correct";
    console.log("Correct");
}
else if(difference<=5)
{
   // document.createElement("p");
   // write.innerHTML="Incorrect";
    console.log("Too High");
}
else if (difference>=5)
{
    console.log("Too low");
}
console.log("guess again");
}
