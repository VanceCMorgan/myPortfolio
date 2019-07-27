function learnMore($index) {

    $currentSet = null;

    switch($index) {
        case -1:
            $('.features').fadeIn(300); 
            $('.project1').fadeOut(300);
            $('.project2').fadeOut(300);
            $('.project3').fadeOut(300);
            $('.project4').fadeOut(300);
            $('.project5').fadeOut(300);
            $('#goBackBtn').fadeOut(300);
          break;
        case 1:
            $('.features').fadeOut(300); 
            $('.project1').fadeIn(300);
            $('#goBackBtn').fadeIn(300);
            $currentSet =  $('.project1');
          break;
          case 2:
            $('.features').fadeOut(300); 
            $('.project2').fadeIn(300);
            $('#goBackBtn').fadeIn(300);
            $currentSet =  $('.project2');
          break;
        case 3:
            $('.features').fadeOut(300); 
            $('.project3').fadeIn(300);
            $('#goBackBtn').fadeIn(300);
            $currentSet =  $('.project3');
          break;
          case 4:
            $('.features').fadeOut(300); 
            $('.project4').fadeIn(300);
            $('#goBackBtn').fadeIn(300);
            $currentSet =  $('.project4');
          break;
        case 5:
            $('.features').fadeOut(300); 
            $('.project5').fadeIn(300);
            $('#goBackBtn').fadeIn(300);
            $currentSet =  $('.project5');
          break;
        default:
          
      } 
}


var firstSlide =document.getElementById("firstSlide");
var secondSlide = document.getElementById("secondSlide");
var thirdSlide = document.getElementById("thirdSlide");
$screenShots = ["url(images/screenshots/emulation1.png)","url(images/screenshots/emulation2.png)","url(images/screenshots/emulation3.png)","url(images/screenshots/emulation4.png)","url(images/screenshots/emulation5.png)"];
$i = 0;
function shuffle($option) {
    
    if($option == 1 && $i < $screenShots.length - 3){
        $i++;
    }
    if($option == -1 && $i >= 1){
        $i--;
    }

    firstSlide.style.backgroundImage = $screenShots[$i]; 
    secondSlide.style.backgroundImage = $screenShots[Math.max($i + 1, 1)];
    thirdSlide.style.backgroundImage = $screenShots[Math.max($i + 2, 2)];
}

window.onload = shuffle();

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//get the div that will hold large image
var imgHolder = document.getElementById("img-holder");

// When the user clicks on the button, open the modal
function blowUp($choice) {
  modal.style.display = "block";
  imgHolder.style.backgroundRepeat = "no-repeat";
  switch($choice){
      case 1:
          imgHolder.style.backgroundImage =firstSlide.style.backgroundImage;
          break;
      case 2:
          imgHolder.style.backgroundImage = secondSlide.style.backgroundImage;
          break;
      case 3:
          imgHolder.style.backgroundImage = thirdSlide.style.backgroundImage;
      break;
    default:
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

