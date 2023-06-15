function addImage() {
    var imageUpload = document.getElementById('imageUpload');
    var dialogueInput = document.getElementById('dialogueInput');
    var lyricsInput = document.getElementById('lyricsInput');
    var gallery = document.getElementById('gallery');
  
    var file = imageUpload.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      var imageSrc = event.target.result;
  
      var imageCard = document.createElement('div');
      imageCard.classList.add('image-card');
  
      var imageElement = document.createElement('img');
      imageElement.src = imageSrc;
  
      var dialogueElement = document.createElement('div');
      dialogueElement.classList.add('dialogue');
      dialogueElement.innerText = dialogueInput.value;
  
      var lyricsElement = document.createElement('div');
      lyricsElement.classList.add('lyrics');
      lyricsElement.innerText = lyricsInput.value;
  
      imageCard.appendChild(imageElement);
      imageCard.appendChild(dialogueElement);
      imageCard.appendChild(lyricsElement);
  
      gallery.appendChild(imageCard);
  
      // Clear the input fields
      imageUpload.value = '';
      dialogueInput.value = '';
      lyricsInput.value = '';
    };
    reader.readAsDataURL(file);
  }
  