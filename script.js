








const form=document.getElementById('myform');
 
function handleClick(event) {
    // Your other JavaScript code for the div
    event.preventDefault(); // Prevent default behavior (redirection)
  }


document.addEventListener('visibilitychange',
  function () {
      if (document.visibilityState === "visible") {
          document.title = "Ruthwik's Portfolio";
          $("#favicon").attr("href", "assets/images/favicon.png");
      }
      else {
        
          $("#favicon").attr("href", "assets/images/favhand.png");
      }
  });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend developer", "video editor", "aspiring software developer", "web developer"],
    loop: true,
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 500,
});
form.addEventListener('submit',(event)=>{

    form.reset();
    
    });
  document.title = "Dude come back ";
// <!-- typed js effect ends -->

















