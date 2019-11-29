function answers(){
    var score=0;
    var maxScore=12;
    var minScore=4;

    var choices=document.getElementsByTagName('input');

    var i;
for(i=0; i<choices.length; i++){
    if(choices[i].checked){
        if(choices[i].value=='a1'){
            score+=3;
        }
        if(choices[i].value=='a2'){
            score+=2;
        }
        if(choices[i].value=='a3'){
            score+=1;
        }
        
    }
}



var answerbox=document.getElementById('answer');
if(score==maxScore){
    answerbox.innerHTML="You're qualified. You're practically perfect. Where have you been?";
}

if(score>=6 && score<maxScore){
    answerbox.innerHTML="You're unqualified. You could be better. Come back later once you look in the mirror a bit closer."
}

if(score<6 && score>minScore){
    answerbox.innerHTML="You're unqualified. You're no the worst, however. Try evaluating yourself honestly."
}
if(score==minScore){
    answerbox.innerHTML="You're unqualified. Like, really, unqualified. How did you get this far in life?"
}
}

function resetAnswers(){
 var choices=document.getElementsByTagName('input');
    for(i=0; i<choices.length; i++){
        if(choices[i].checked){
           choices[i].checked=false;
           
            
        }
    }

    var answerbox=document.getElementById('answer');
    answerbox.innerHTML=" ";

   
}
