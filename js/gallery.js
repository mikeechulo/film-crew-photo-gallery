function upDate(previewPic) {
    console.log("Event triggered!");
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);
    var imageDiv = document.getElementById("image");
    imageDiv.textContent = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    console.log("Text and background updated!");
  }
  
  function unDo() {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = " Hover Over Image For More!";
    console.log("Undo function executed!");
  }