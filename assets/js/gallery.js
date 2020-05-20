function openImage(imgs,projectNumber) {
  console.log(document.getElementsByClassName("imgtext")[0].style);
    // Get the expanded image
    var expandImg = document.getElementsByClassName("expandedImg")[projectNumber-1];
    // Get the image text
    var imgText = document.getElementsByClassName("imgtext")[projectNumber-1];
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }
  