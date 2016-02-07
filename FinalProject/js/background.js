//make array with image files
var images = ["'./images/1.jpg'", "'./images/2.jpg'", 
"'./images/3.jpg'", "'./images/4.jpg'", "'./images/5.jpg'"];
//math variable to determine bg image # to choose
var choosebg = Math.floor(Math.random() * images.length);

//fuction to enact bg change once page loads?    
$( document ).ready(function() {
   console.log(choosebg);
   console.log(images);
   console.log(images[choosebg]);
   //function to change css to new image.
    $('body').css({
      backgroundImage:  "url(" + images[choosebg] + ")"
    });
  // Why don't these work????
  // document.getElementById("bg").style.backgroundImage = images[choosebg];
  // $('#bg').css("background-image", images[choosebg] );
});