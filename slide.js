var state = "";	

$(".brand_title").click(function(){
  state = "Main";
});

$(".img_Main").click(function(){
  state = "Main";
});

$(".imgA").click(function(){
  state = "A";
});

$(".imgB").click(function(){
  state = "B";
});

$(".imgC").click(function(){
  state = "C";
});

$(".imgD").click(function(){
  state = "D";
});

$(".imgE").click(function(){
  state = "E";
});

$(".imgF").click(function(){
  state = "F";
});

$(".imgG").click(function(){
  state = "G";
});

$(".imgH").click(function(){
  state = "H";
});


$(".slideD").click(function(){
  state = "slideD";
});


var counter = 0;

function slide () {
  
  for(var i = 0; i < slides.length; i++) {
        
      if(slides[i].state === state ) {

        //console.log(slides[i].img);
        $('.main').empty();
        $('.main').prepend(slides[i].img); 
      
      }       
              
  }

};

var counter = 0;

 function slideD () { 

  console.log("yooo");
                  
  for(var i = 0; i < slides.length; i++) {
          
      if(slides[i].state === "slideD" ) {

        var brute = slides[i].frames;
        counter = (counter + 1) % brute.length;  
        document.querySelector(".slideDigital").src=brute[counter].img;
        console.log(brute[counter].img);
         
      }           
              
  };
};



         

