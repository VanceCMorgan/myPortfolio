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


