var selectYear=document.getElementById("selectYear");
        var selectMonth=document.getElementById("selectMonth");
        var selectDate=document.getElementById("selectDate");
        var year, month, tempDate;

        //adding values from 2000 to 2099 to year dropdown
        for(var i=2000;i<=2099;i++)
            {year+="<option>"+i+"</option>";}
            selectYear.innerHTML=year;

        //adding values from 1 to 12 months
        for( var i=1;i<=12;i++)
        {month+=`<option>${i}</option>`;}
        selectMonth.innerHTML=month;

        //adding date from 1 to 31
        for( var i=1;i<=31;i++)
        {tempDate+=`<option>${i}</option>`;}
        selectDate.innerHTML=tempDate;

        //evaluate date and month. Then print the message
        var printMessage=document.querySelector("#message");
        var tDate=document.querySelector("#selectDate");
        var tMonth=document.querySelector("#selectMonth");
        var tYear=document.querySelector("#selectYear");

        //print message
        function timeTravel()
        {    
            console.log(tYear.value, tMonth.value, tDate.value);
            if(tMonth.value==2)
            {
                timeTravelFeb();
            }
            else if(tMonth.value==4 || tMonth.value==6 || tMonth.value==9 || tMonth.value==11 && tDate.value==31) //validate month and date
            {
                console.log("Invalid date. Please try again")
                document.createElement("p");
                printMessage.innerHTML="Date is invalid and the month you have selected does not contain the date 31. Please try again";

            }
            else
            {
            console.log(`The time machine has travelled to ${tYear.value}-${tMonth.value}-${tDate.value}`);
            document.createElement("p");
            printMessage.innerHTML=`The time machine has travelled to ${tYear.value}-${tMonth.value}-${tDate.value}`;
            }

        }
        function timeTravelFeb()
        {            
            console.log(tYear.value%4);
            if((tYear.value%4)==0) //validate leap year
            {
                if(tMonth.value==2 && tDate.value==30 || tDate.value==31)
                {
                    document.createElement("p");
                    printMessage.innerHTML="This is leap year and february month does not have the dates 30 & 31. Please try again";
                    console.log("This is leap year and february month does not have the dates 30 & 31. Please try again")
                }
                else
                {
                console.log(`The time machine has travelled to ${tYear.value}-${tMonth.value}-${tDate.value}`);
                document.createElement("p");
                printMessage.innerHTML=`The time machine has travelled to ${tYear.value}-${tMonth.value}-${tDate.value}`;
                }
            }
            else if((tYear.value%4)!=0) //validate non-leap year
            {
                if(tMonth.value==2 && tDate.value==29 || tDate.value==30 || tDate.value==31)
                {
                    document.createElement("p");
                    printMessage.innerHTML="This is not a leap year and february month does not have the dates 29, 30 & 31. Please try again";
                    console.log("This is not a leap year and february month does not have the dates 29, 30 & 31. Please try again")
                }
                else
                {
                console.log(`The time machine has travelled to ${tYear.value}-${tMonth.value}-${tDate.value}`);
                document.createElement("p");
                printMessage.innerHTML=`The time machine has travelled to ${tYear.value}-${tMonth.value}-${tDate.value}`;
                }
            }
            else 
            {
            console.log(`The time machine has travelled to ${tYear.value}-${tMonth.value}-${tDate.value}`);
            document.createElement("p");
            printMessage.innerHTML=`The time machine has travelled to ${tYear.value}-${tMonth.value}-${tDate.value}`;
            }
    }