


      document.addEventListener("DOMContentLoaded", function(){
        
        window.addEventListener('scroll', function() {
             
          if (window.scrollY > 100) {
            document.getElementById('primary-navigation').classList.add('fixed-top-bg');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
          } else {
             document.getElementById('primary-navigation').classList.remove('fixed-top-bg');
             // remove padding top from body
            document.body.style.paddingTop = '0';
          } 
        });
      }); 
      // DOMContentLoaded  end

      window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("logo").style.width = "11.875rem";
  } else {
    document.getElementById("logo").style.width = "11.875rem";
 
  }
}
// DOMContentLoaded  end
