function checkEqualFrequency(i) {
    a=Array.from(new Set(i));
    b=i.filter(n=>n==i[0]).length; 
    for( j=1;j<a.length;j++){
        if(b!=i.filter(n=>n==a[j]).length)
            return false;
    }
return true;
}