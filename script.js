
//math

function factorial(x){
    var result =1;
    for(var i=1;i<=x;i++){
        result= result*i;
    }

    return result;
}


function fsin(x,n){
    var sin =0;
    if(n%2==0){
       n--;
    }
    for(var i =1; i<=n;i+=2){
       if(i%4==3)
       sin-=Math.pow(x,i)/factorial(i);
       else
       sin+=Math.pow(x,i)/factorial(i);
       
    }
    return sin;
}

function fcos(x,n){

    var cos =0;
    if(n%2!=0){
        n--;
     }

    for(var i =0;i<=n;i+=2){
        if(i%4==0)
            cos+=Math.pow(x,i)/factorial(i);
        else
        cos-=Math.pow(x,i)/factorial(i);
    }
    return cos;
}

function sinError(n){

     if(n%2==0)
     n++;
     else
     n+=2;
      
    return Math.pow(Math.PI,n+1)/factorial(n);
}

function cosError(n){

    if(n%2==0)
    n+=2;
    else
    n++;
     
   return Math.pow(Math.PI,n+1)/factorial(n);
}



//functionality of website
let result= document.querySelector("#sinresult");

let sinerror = document.querySelector("#sinerror");

let resultcos= document.querySelector("#cosresult");

let coserror = document.querySelector("#coserror");

document.getElementById('obliczsin').onclick = () =>{
    let x = document.getElementById('xinput').value;
    let n = document.getElementById('ninput').value;

result.textContent = fsin(x,n);

sinerror.textContent=sinError(parseInt(n));


}

document.getElementById('obliczcos').onclick = () =>{
    let x = document.getElementById('xinputcos').value;
    let n = document.getElementById('ninputcos').value;

resultcos.textContent = fcos(x,n);

coserror.textContent = cosError(parseInt(n));
}



