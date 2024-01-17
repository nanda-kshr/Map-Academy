


let name = ["Lisa Driver, MI","Morgan James, NY","Alexa Young, CA"];
let rev = ["“Have customers review you and share what they had to say.”",
"“Testimonials are a great way to share positive feedback you have received and encourage others to work with you. Add your own here.”",
"“Testimonials provide a sense of what it's like to work with you or use your products. Change the text and add your own.”"];

let currentreview = 0;
var myInterval = setInterval(nextQuote, 4000);
const reviewHead = document.getElementById("revh");
const reviewQuote = document.getElementById("revp");

function showPage(page){
  var pages = ["index.html","about.html","about1.html","about2.html",
  "programs.html","location.html","testimonials.html"];
  for(var i=0;i<pages.length;i++){
    if(pages[i]!=page){
      console.log(pages[i]);
      ($(pages[i] )).css("visibility","hidden");
      ($(pages[i] )).css("opacity","0");

    }
  }
  window.location.replace(page);
}

function nextQuote(){
  currentreview ++;
  reviewQuote.style.animation = "";
  if(currentreview == 3){
    currentreview = 0;
  }
  reviewHead.innerHTML = name[currentreview];
  reviewQuote.innerHTML = rev[currentreview];

}


function prevQuote(){
  currentreview --;
  if(currentreview == -1){
    currentreview = 2;
  }
  reviewHead.innerHTML = name[currentreview];
  reviewQuote.innerHTML = rev[currentreview];
}



function jsTransitionb2t(nav){
  if (nav.length) {
    var f_top = nav.offset().top;
  }
    var f_top = nav.position().top;
  $(window).scroll(function() {
       if ($(window).scrollTop() + $(window).height() >= f_top ) {
            nav.css( "bottom", "0px" );
            nav.css( "opacity", "1" );
       }
       else{
          nav.css( "bottom", "-200px" );
          nav.css( "opacity", "0" );
       }
   });
}
function jsTransitionl2r(nav){

  if (nav.length) {
    var f_top = nav.offset().top;
  }else{
    var f_top = nav.position().top;
  }
  $(window).scroll(function() {
       if ($(window).scrollTop() + $(window).height() >= f_top ) {
            nav.css( "left", "0px" );
            nav.css( "opacity", "1" );
       }
       else{
          nav.css( "left", "-200px" );
          nav.css( "opacity", "0" );
       }
   });
}
function jsTransitionr2l(nav){
  if (nav.length) {
    console.log(nav);
    var f_top = nav.offset().top;
  }
    var f_top = nav.position().top;
  $(window).scroll(function() {
       if ($(window).scrollTop() + $(window).height() >= f_top ) {
            nav.css( "right", "0px" );
            nav.css( "opacity", "1" );
       }
       else{
          nav.css( "right", "-200px" );
          nav.css( "opacity", "0" );
       }
   });
}


$(document).ready(function() {
  var nav = $('.aboutUs');
  jsTransitionb2t(nav);
});

$(document).ready(function() {
  var nav = $('.cards');
  jsTransitionr2l(nav);

});

$(document).ready(function() {
  var nav = $('.vision');
  jsTransitionb2t(nav);

});
$(document).ready(function() {
  var nav = $('.mission');
  jsTransitionb2t(nav);
});




$(document).ready(function() {
  var nav = $('.reviewBg');
  jsTransitionb2t(nav);
});

$(document).ready(function() {
  var nav = $('.owned');
  jsTransitionb2t(nav);
});
