function maker(isTorch,type,long,fancy,clearance,normal,left){
result="";
        if (torch){
            if(left){
              result=" ==<o~"; 
            }else{
              result="~o>== ";  
            } 
        }
    for(i=0; i<long; i++){
        if(left){
            result=type+result; 
        }else{
            result=result+type;  
        }
    }
        
    if (fancy){
        result+="\u00A3";
    }
    if(clearance){
        result+="F"
    }
    if(normal){
        result+="E"
    }
    if(left){
        result="\u018E"+result;
    }
    console.log(result)
    return result;
}


function grawgAndLawg(orders) {
torch= normal= left= fancy = clearance = false;
value="";
last=[0,0,0];
counter=0;
quantity="";
var result=[];
number= false;
    for( x=0; x< orders.length; x++){
        result.push("");
        console.log(x);
        counter=0;
        for( y=0; y< orders[x].length;y++){
       
        
            switch(orders[x][y]){
                case "T":
                    torch=!torch;
                    break;
                case "N":
                    normal=!normal;
                    left=false;
                    fancy=false;
                    clearance=false;
                    break;
                case "L": 
                    left=!left;
                    normal=false;
                    fancy=false;
                    clearance=false;
                    break;
                case "F":
                    fancy=!fancy;
                    left=false;
                    normal=false;
                    clearance=false;
                    break;
                case "C":
                    clearance=true;
                    left=false;
                    normal=false;
                    fancy=false;
                    break;
                case "S": 
                    last[0]=counter;
                    break;
                case "M": 
                    last[1]=counter;
                    break;
                case "G": 
                    last[2]=counter;
                    break;


            };
            if(!isNaN(orders[x][y])){
                if(number){
                    quantity+=orders[x][y];

                }else{
                    quantity="";
                    quantity+=orders[x][y];
                    number=true;
                }

            }else{
                number= false;
            }
            counter++; 
        }
        
    value=(last[2]>last[1]&&last[2]>last[0])?"\u2261":(last[1]>last[2]&&last[1]>last[0]?"=":"-");
    result[x]=maker(torch,value,parseInt(quantity),fancy,clearance,normal,left);
    last[0]=0;
    last[1]=0;
    last[2]=0;
        
    torch= normal= left= fancy = clearance = false;
    quantity="";
        
        
        
    }
    
    return result;
    
}
