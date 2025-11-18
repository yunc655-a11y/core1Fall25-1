
  <script>
    document.querySelectorAll("img").forEach((image, index) => {
      image.addEventListener("dblclick", () => {
        if (index === 0) {
          window.location.href = "";
        } else if (index === 1) {
          window.location.href = "heart.html";
        } else if (index === 2) {
          window.location.href = "music.html";
        } else if (index === 3) {
          window.location.href = "smells.html";
        } else if (index === 4) {
          window.location.href = "food.html";
        }
      });
    });
  </script>


// @ts-check 

const cd = document.getElementById("cd");
const audio = document.getElementById("music");

cd.addEventListener ("click" , function ( ) {
  cd.classListList.toggle("active");

  if (cd.classList.contains("active")) {
    audio.play();
  } else {
    audio.onpause ();
  
  }

}); 