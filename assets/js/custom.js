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
            $('#projectCaption').fadeIn(300); 
            $('#projectTitle').fadeIn(300); 
            $('.socialIcon').css("padding-left", "0px");
          break;
        case 1:
            $('.features').fadeOut(300); 
            $('.project1').fadeIn(300);
            $('#goBackBtn').fadeIn(300);
            $('#projectCaption').fadeOut(300); 
            $('#projectTitle').fadeOut(300); 
            $currentSet =  $('.project1');
            $('.socialIcon').css("padding-left", "15px");
          break;
          case 2:
            $('.features').fadeOut(300); 
            $('.project2').fadeIn(300);
            $('#goBackBtn').fadeIn(300);
            $('#projectCaption').fadeOut(300); 
            $('#projectTitle').fadeOut(300); 
            $currentSet =  $('.project2');
            $('.socialIcon').css("padding-left", "15px");
          break;
        case 3:
            $('.features').fadeOut(300); 
            $('.project3').fadeIn(300);
            $('#goBackBtn').fadeIn(300);
            $('#projectCaption').fadeOut(300); 
            $('#projectTitle').fadeOut(300); 
            $currentSet =  $('.project3');
            $('.socialIcon').css("padding-left", "15px");
          break;
          case 4:
            $('.features').fadeOut(300); 
            $('.project4').fadeIn(300);
            $('#goBackBtn').fadeIn(300);
            $('#projectCaption').fadeOut(300); 
            $('#projectTitle').fadeOut(300); 
            $currentSet =  $('.project4');
            $('.socialIcon').css("padding-left", "15px");
          break;
        case 5:
            $('.features').fadeOut(300); 
            $('.project5').fadeIn(300);
            $('#goBackBtn').fadeIn(300);
            $('#projectCaption').fadeOut(300); 
            $('#projectTitle').fadeOut(300); 
            $currentSet =  $('.project5');
            $('.socialIcon').css("padding-left", "15px");
          break;
        default:
          
      } 
}


