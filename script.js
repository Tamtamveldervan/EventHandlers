const myButt = document.getElementById("mybutton")
myButt.addEventListener("click", function (){alert("button clicked")});




//myBody - de const van het element 'body' waaraan ik een class toevoeg.

//Nu moet ik nog zorgen dat dit gebeurt wanneer ik op de knop klik. 

//const bedenken bijv toggleColore

//function maken: 
//const myBody = document.querySelector("body")

const toggleColor = () => {
    
    myBody.classList.toggle("red-background")};

//dus een functie die de class red-background aan het body element toevoegt. 

const myButton2 = document.getElementById("mybutton2");


const myBody = document.querySelector("body");

//const toggleColor = () => {
    //myBody.classList.toggleClass("red-background");}

    myButton2.addEventListener("click", toggleColor);

  //  const myButton2 = document.getElementById("mybutton2")
