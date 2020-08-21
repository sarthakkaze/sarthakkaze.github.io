//SET DATE
const date= document.getElementById('#date');
//date.innerHTML= new Date().getFullYear();//this will automatically chose the current year so no need to update the year

//CLOSE LINKS
const navtoggle = document.querySelector('.nav-toggle');
const linkscontainer = document.querySelector('links-container');
const links = document.querySelector('links');

navtoggle.addEventListener('click',function(){
   // linkscontainer.classList.toggle("show-links"); //we can use this when we know the no. of links are fixed i.e. NOT DYANAMIC
   const containerheight =linkscontainer.getBoundingClientRect().height; //this get~~Rect returns size and pos of element acc to viewport 
   const linksheight =links.getBoundingClientRect().height;//

   if(containerheight === 0){
       linkscontainer.style.height = `${linksheight}px`;
   }
   else{
       linkscontainer.style.height = 0;
   }
});

const navbar = document.getElementById("nav");
const toplink = document.querySelector(".top-link");
//FIXED NAVBAR
  //we by default did'nt had moving or fixed navbar
window.addEventListener('scroll',function(){
  //  console.log(window.pageYOffset);  //pageyoffset is a read only window property that returns the number of pexelsthe document has scrolled vertically.
  const scrollheight = window.pageYOffset;
  const navheight = navbar.getBoundingClientRect().height;
  if(scrollheight > navheight){
      navbar.classList.add('fixed-nav')
  }

}); 
//SMOOTH SCROLL
//SELECT LINKS