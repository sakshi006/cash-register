const bill = document.querySelector(".bill");
const cash = document.querySelector(".cash");
const buttonCheck = document.querySelector(".check");
const buttonReset = document.querySelector(".reset");
const alert = document.querySelector(".alert");
const amt2000 = document.querySelector(".note-2000");
const amt500 = document.querySelector(".note-500");
const amt100 = document.querySelector(".note-100");
const amt20 = document.querySelector(".note-20");
const amt10 = document.querySelector(".note-10");
const amt5 = document.querySelector(".note-5");
const amt1 = document.querySelector(".note-1");
const total = document.querySelector(".total");


buttonCheck.addEventListener("click",check);

function clear(){
    amt2000.innerHTML="";
    amt500.innerHTML="";
    amt100.innerHTML="";
    amt20.innerHTML="";
    amt10.innerHTML="";
    amt5.innerHTML="";
    amt1.innerHTML="";
    total.innerHTML="";
}


function check(){
    var billValue = parseInt(bill.value);
    var cashValue = parseInt(cash.value);
    if(billValue===""||cashValue==="")
    {
       alert.innerHTML = " Enter valid Amount";
       clear();
    }
    else if(billValue>cashValue)
    {
        alert.innerHTML = "Your bill amount is more than the Cash you paid.";
        clear();
    }
    else if(billValue===cashValue)
    {
        alert.innerHTML="No returns";
        clear();
    }
    else
    {
        var final = calc(billValue,cashValue);
         total.innerHTML = "Total Number of currency notes are "+final;
    }
};



function calc(a,b){
    var r = b-a;    //r=return amount
    var returnAmt=r;
    var i1=0,i5=0,i10=0,i20=0,i100=0,i500=0,i2000=0;
    var k=1,c=0;
    while(r!=0)
    {
       c=r%10 *k;
       r= Math.floor(r/10);
       k*=10;

       if(c>=1 && c<10)
       {
           i5= i5 + Math.floor(c/5);
           c=c%5;
           if(c===1) i1=1;
           if(c===2) i1=2;
           if(c===3) i1=3;
           if(c===4) i1=4;
       }
       else if(c>=10 && c<100)
       {
             i20+= Math.floor(c/20);
             c=c%20;
             if(c===10) i10+=1;
       }
       else if(c>=100 &&c<2000)
       {
           i500+= Math.floor(c/500);
           c=c%500;
           if(c===100) i100+=1;
           if(c===200) i100+=2;
           if(c===300) i100+=3;
           if(c===400) i100+=4;
       }
       else
       {
           i2000 += (Math.floor(c/2000));
           c=c%2000;
           if(c===1000) i500+=2;
       }
    }
     var total = i1+i5+i10+i20+i100+i500+i2000;

    alert.innerHTML= "Return Amount is : "+ returnAmt;
     amt1.innerHTML="Denominations of ₹1 : "+i1 +" ("+1*i1+")";
     amt5.innerHTML="Denominations of ₹5 : "+i5+" ("+5*i5+")";
     amt10.innerHTML="Denominations of ₹10 : "+i10+" ("+10*i10+")";
     amt20.innerHTML="Denominations of ₹20 : "+i20+" ("+20*i20+")";
     amt100.innerHTML="Denominations of ₹100: "+i100+" ("+100*i100+")";
     amt500.innerHTML="Denominations of ₹500 : "+i500+" ("+500*i500+")";
     amt2000.innerHTML="Denominations of ₹2000 : "+i2000+" ("+2000*i2000+")";

     return total;
}


buttonReset.addEventListener("click",function(){
    bill.value="";
    cash.value="";
    clear();
})
       