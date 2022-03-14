


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


