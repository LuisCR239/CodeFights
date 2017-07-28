function notIndexOf(givenString, value) {
equal=false;
    for(var i=0;i<= (givenString.length - value.length); i++){
        for(var j=0; j<value.length && !equal; j++){
            if(givenString.charAt(j+i) == value.charAt(j)){
                equal=true;
            }
        }
        if(!equal){
            return i;
        }else{
            equal=false;
        }
    }
    return -1;
}
