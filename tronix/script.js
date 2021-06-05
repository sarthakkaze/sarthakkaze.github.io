

 //     alert("JS  is  WORKING!");



 document.querySelector




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