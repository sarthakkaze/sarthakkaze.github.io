
 //     alert("JS  is  WORKING!");


 

///////////////////////////////////////////////////
//                   C O N T A C T    F O R M
//////////////////////////////////////////////////

 document.getElementById('contactform').addEventListener('click',
 function(){
     document.querySelector('.contact-modal').style.display = 'flex';
 });

 document.querySelector('.close').addEventListener('click',
 function(){
    document.querySelector('.contact-modal').style.display = 'none';

 });



function contactsend(){
 // fill this function accordingly 
}
