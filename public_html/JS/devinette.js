/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//alert("hello");
//alert('bonjour');

//var obj={
//  titre:'film',
//  annee:1950,
//  nbliens:30,
//  realisateurs:[{nom:'disney'},{nom:'pixar'}],
//  
//  affiche:function(){
//  
//  alert(this.titre+this.annee+this.realisateurs[0].nom+this.realisateurs[1].nom);
//}
//  
//};
//
//obj.affiche();



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var nombre = getRandomInt(0, 100);
alert(nombre);


var it = 1;
var bool = false;
var a=1;
var note="bien";

while (bool == false) {

    var nb = prompt('entrer un nombre entre 0et 100');
    if (nb == nombre) {
        
        bool = true;
        switch (it){
            case 1:note="genial";
            case 2:note="super" ;
            default:note="pas bien";
            
            
        }
        alert('gagné en'+it+"essais"+note);
        
        
    } else if (nb < nombre) {
        alert('ton nombre est plus petit');
        it++;
    } else {
        alert('ton nombre est plus grand');
        it++
    }
}