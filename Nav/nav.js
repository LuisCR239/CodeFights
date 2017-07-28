function Nav(d) {
    var first=0,second=0,third=0;
    d.split("").forEach(function(item){
        switch(item){
            case "v":
                first++;
                break;
            case "^":
                first--;
                break;
            case ">":
                second++;
                break;
            case "<":
                second--;
                break;   
            case "+":
                third++;
                break;
            case "-":
                third--;
                
        }
    });
    return[first,second,third];       
            
}