/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function clicBouton(){
   //var div12 =document.getElementById("titre");
   // div12.innerHTML="hello salut bonjour";
    
    var liste =document.getElementsByClassName("menu");
    for(i=0;i<liste.length;i++){
        
        var tag=liste[i];
        tag.innerHTML="coucou";
    }
    
}

function clicBouton1(){
   var div12 =document.getElementById("titre");
   div12.innerHTML="hello salut bonjour";
    
}

function clicBouton2(){
    var source=document.getElementById("texte");
    var cible=document.getElementById("titre");
    cible.innerHTML=source.value.toUpperCase();
    
}
