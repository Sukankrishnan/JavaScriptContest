var counter=0;
        var quizQues=[ 
            {
                QuizNo: 1,
                Quiz: "1. Square root of 64 ",
                Answer: 8
            },
            {
                QuizNo: 2,
                Quiz: "2. Sum of 3 and 3",
                Answer: 6
            },
            {
                QuizNo: 3,
                Quiz: "3. Sum of 4 and 3",
                Answer: 7
            },
            {
                QuizNo: 4,
                Quiz: "4. Sum of 5 and 3",
                Answer: 8
            },
            {
                QuizNo: 5,
                Quiz: "5. Sum of 6 and 3",
                Answer: 9
            },
            {
                QuizNo: 6,
                Quiz: "6. Sum of 7 and 3",
                Answer: 10
            },
            {
                QuizNo: 7,
                Quiz: "7. Sum of 8 and 3",
                Answer: 11
            },
            {
                QuizNo: 8,
                Quiz: "8. Sum of 9 and 3",
                Answer: 12
            },
            {
                QuizNo: 9,
                Quiz: "9. Sum of 10 and 3",
                Answer: 13
            },
            {
                QuizNo: 10,
                Quiz: "10. Sum of 11 and 3",
                Answer: 14
            }
        ];
var mark=0;
var printQues=document.querySelector("#getQuestion");
var currentQues=0;
        function questions()
        {
            
            for(var i=0;i<quizQues.length;i++)
            {
            console.log(quizQues[currentQues].Quiz);
            document.createElement("p");
            printQues.innerHTML=quizQues[currentQues].Quiz;
            
            }
       }

       function search(ele){
        alert(ele.value);
       }

       function nextQues()
       {
        
            var getAnswer=document.getElementById("#answer");
            console.log("answer is",getAnswer);
            if(getAnswer==quizQues[currentQues].Answer)
            {
                
                mark++;
                console.log(mark);
            }
            else
            { mark-=2;
            console.log(mark);}
            currentQues++;
            console.log(currentQues);
            if(quizQues.length>=currentQues)
            {
            questions(quizQues);
            }
            else //if(quizQues.length<currentQues && quizQues[currentQues].QuizNo==10)
            {
                document.createElement("p");
                printQues.innerHTML= `You secured ${mark} marks`; 
            }
       }
        //console.log(`You secured ${mark} marks`);
        