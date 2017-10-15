convertString=(s, t)=> {
 j=0;
    for( i=0; i<s.length; i++){
        s[i]==t[j]?j++:0
        
    }
return j ==t.length;

}