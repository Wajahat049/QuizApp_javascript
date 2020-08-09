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
var answers=[1,3,4,1,3,2]
var score=0

// question=""
// option_1="New York,USA"
// option_2="Geneva"    
// option_3="Hague (Netherlands)"
// option_4="Paris"

// document.getElementById("ques").innerText=question
// document.getElementById("option-1").lastChild.nodeValue=" "+option_1
// document.getElementById("option-2").lastChild.nodeValue=" "+option_2
// document.getElementById("option-3").lastChild.nodeValue=" "+option_3
// document.getElementById("option-4").lastChild.nodeValue=" "+option_4;


var optioned=0
var j=0
function Check(){
    if(opt_1.checked){
         optioned=1
    }
else if(opt_2.checked){
         optioned=2
    }
else if(opt_3.checked){
         optioned=3
    }
else if(opt_4.checked){
         optioned=4
    }
else if((opt_1.checked && opt_2.checked && opt_3.checked && opt_4.checked)==false ){
        alert("please select a option")
        
}
    if(j<6){
        if(answers[j]===optioned){
        score+=1;
        document.getElementById("opt-"+optioned.toString()).parentNode.style.backgroundColor = "green";
        document.getElementById("opt-"+optioned.toString()).parentNode.style.color = "white";
        j++
        document.getElementById("score").innerHTML="score"+" "+score.toString()+"/6"
        
        }
        
        else{
            console.log(document.getElementById("opt-"+optioned.toString()).parentNode);
            document.getElementById("opt-"+optioned.toString()).parentNode.style.backgroundColor = "red";
            document.getElementById("opt-"+optioned.toString()).parentNode.style.color = "white";
            j++
        }
        document.getElementById("opt-"+answers[i].toString()).disabled=true
        console.log(document.getElementById("opt-"+answers[j].toString()))

        
        
    }

        
}




var i=0
function Next(){ 
    document.getElementById("opt-"+answers[i].toString()).disabled=false
    document.getElementById("opt-"+optioned.toString()).parentNode.style.backgroundColor = null;
    document.getElementById("opt-"+optioned.toString()).parentNode.style.color = null;
    if(i<6){
question=lst[i][0]
option_1=lst[i][1][0]
option_2=lst[i][1][1]
option_3=lst[i][1][2]
option_4=lst[i][1][3]
document.getElementById("ques").innerText=question
document.getElementById("option-1").lastChild.nodeValue=" "+option_1
document.getElementById("option-2").lastChild.nodeValue=" "+option_2
document.getElementById("option-3").lastChild.nodeValue=" "+option_3
document.getElementById("option-4").lastChild.nodeValue=" "+option_4;
i+=1

}
}

