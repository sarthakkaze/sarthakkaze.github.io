
/*
window.addEventListener('scroll',function(){
    if(window.pageYOffset<1100){
        document.body.style.background = "white";
        document.getElementById('skilltag').style.color = "black";
    }
    else if(window.pageYOffset>1100){
        document.body.style.background = "rgb(53, 53, 53)";
        document.body.style.transition = "1.5s";
        document.getElementById('skilltag').style.color = "orange";
      
    }
});
*/

// Select the button
const btn = document.querySelector(".btn-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == "light-theme.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "dark-theme.css";
  // Otherwise... 
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "light-theme.css";
  }
});
//https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/




;


















  