var lst=[["The World Largest desert is ?",["Thar", "Kalahari" ,"Sahara", "Sonoran"]],
["Mount Everest is located in ?",["India","Nepal", "Tibet", "China"]],
["The device used for measuring altitudes is ?",[ "altimeter","ammeter", "audiometer", "galvanometer"]],
["The chief ore of Aluminium is ?",["Iron", "Cryolite", "Bauxite", "Haematite"]],
["The hottest planet in the solar system ?",["Earth","Venus","Mars","Jupiter"]]];

var ques = document.getElementsByClassName("ques")
var opt_1=document.getElementById("opt-1")
var opt_2=document.getElementById("opt-2")
var opt_3=document.getElementById("opt-3")
var opt_4=document.getElementById("opt-4")
var answers=[3,4,1,3,2]
var score=0


function Check(){
    
    if(opt_1.checked){
        option=1
    }
    else if(opt_2.checked){
        option=2
    }
    else if(opt_3.checked){
        option=3
    }
    else if(opt_4.checked){
        option=4
    }
}
console.log(option)
var j=0
    if(j<4){
        if(answers[i]===option){
        score+=1;
        document.getElementById("opt-"+option.toString()).parentNode.style.backgroundColor = "green";
        document.getElementById("opt-"+option.toString()).parentNode.style.color = "white";
        j++
        }
        
        else{
            console.log(document.getElementById("opt-"+option.toString()).parentNode);
            document.getElementById("opt-"+option.toString()).parentNode.style.backgroundColor = "red";
            document.getElementById("opt-"+option.toString()).parentNode.style.color = "white";
            j++
        }
        document.getElementById("opt-"+option.toString()).parentNode.style.color = null;
        
    }



var i=0
function Next(){ 
    if(i<5){
question=lst[i][0]
option_1=lst[i][1][0]
option_2=lst[i][1][1]
option_3=lst[i][1][2]
option_4=lst[i][1][3]
document.getElementById("ques").innerText=question
// console.log(document.getElementById("option-1").lastChild.nodeValue)
document.getElementById("option-1").lastChild.nodeValue=" "+option_1
document.getElementById("option-2").lastChild.nodeValue=" "+option_2
document.getElementById("option-3").lastChild.nodeValue=" "+option_3
document.getElementById("option-4").lastChild.nodeValue=" "+option_4;
i+=1

}
}

