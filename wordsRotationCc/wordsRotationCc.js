function wordsRotationCc(words) {
    cantidadLetras=words[0].length;
    procesadas=[];
    for (var i = cantidadLetras-1; i >= 0; i--){
        procesadas.push("");
    }
    
    words.forEach(function(word){
        temp = word.split("");
        tempCounter=0;
        for (var i = cantidadLetras-1; i >= 0; i--){
            procesadas[i]+=temp[tempCounter];
            tempCounter++;
        }
        
    });
    
    return procesadas;
    
}
