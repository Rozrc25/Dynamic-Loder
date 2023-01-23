 //title 
 let docTitle = document.title;
 window.addEventListener("blur", () => {
     document.title = "Come Back:("
 })
 window.addEventListener("focus", () => {
     document.title = docTitle;
 })

 //for error mess
 let errorLin = document.getElementById(error)

 function errorMss() {
     errorLin = "Something went wrong , please try again"
     error.textContent = errorLin
 }
 function removerror() {
     var elementToBeRemoved = document.getElementById('error');
     elementToBeRemoved.parentNode.removeChild(error);
 }

 //box
 var disp = document.getElementById('GFG_UP')

 function GFG_Fun() {
     disp = "Image is added"
     GFG_UP.textContent = disp;

     var img = document.createElement('img');
     img.src = 'box.png';
     document.getElementById('body').appendChild(img);
 }

 function stopbox() {
     var elementToBeRemoved = document.getElementById('GFG_UP');
     elementToBeRemoved.parentNode.removeChild(GFG_UP);
 }

 

 // function boxfun(){
 //     var box = document.createElement('div');
 //     box.classList.add("box-div");
 //     document.getElementById('body').appendChild(box);
 // }

