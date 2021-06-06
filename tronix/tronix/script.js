

 //     alert("JS  is  WORKING!");



 document.getElementById('contactform').addEventListener('click',
 function(){
     document.querySelector('.contact-modal').style.display = 'flex';
 });

 document.querySelector('.close').addEventListener('click',
 function(){
    document.querySelector('.contact-modal').style.display = 'none';

 });



///////////////////////////////////////////////////
//                   S  E  R  V  I  C  E  S
//////////////////////////////////////////////////

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
 
 
///////////////////////////////////////////////////
//         S  E  R  V  I  C  E  S----E  N  D
//////////////////////////////////////////////////  