function reverseInverse(s) {
    sentence="";
    word=[];
    letters=[];
    letters = s.split("");
    letters.push(" ");
    newSentence=[];
    counter=0;
    
    letters.forEach(function(item){
        if(item === " " ){
            word = word.reverse();
            word.push(" ");
            word.forEach(function(character){ newSentence.push(character); } );
            word=[];
        }else if(item.match(/[^a-z 0-9]/gi)){
                word = word.reverse(); 
                word.forEach(function(character){ newSentence.push(character); } );
                word=[];
                newSentence.push(item);
        }else{
            word.push(item)
        }
        
        
    } );
    
    newSentence.forEach(function(items){
        sentence+=items;
    });
    
    newSentence = sentence.split("");
    newSentence.pop();
    sentence="";
    newSentence.forEach(function(character){
        if(s.charAt(counter) === s.charAt(counter).toUpperCase()){
            sentence+=character.toLowerCase();
        }else{
            sentence+=character.toUpperCase();
        }
        counter++;
    });
    
    return sentence;
}

      