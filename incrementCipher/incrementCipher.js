function incrementCipher(s, nums) {
var t="abcdefghijklmnopqrstuvwxyz",u=""

for (var j=0; j<nums.length; j++){
  for(var i=0; i<s.length; i++){
    
    
    if((i+1)%nums[j]==0){
       
       if(s[i] === "z"){
         u+="a"
       }else{
           u+=t.charAt(t.indexOf(s[i])+1)
       }
       
    }else{
      u+=s[i]
    }

  }
 s=u
  u=""
}
  return s  

}
