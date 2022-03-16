//warm up: 1

let spanSize = document.querySelector(".mess-with-me")

spanSize.style.fontSize = "40px";

//========================================================================
//warm up: 2

let paraColour = document.querySelector("p.mess-with-me");

paraColour.style.backgroundColor = "green";

//========================================================================
//warm up: 3

let hideImg = document.querySelector("#hide-me");

hideImg.style.display = "none";

//========================================================================
//warm up: 4

let dinoImg = document.querySelector("#triceratops");

dinoImg.style.width = "324px";

//========================================================================
//event listener: 1

paraColour.addEventListener("click", function(){
    paraColour.style.color = "orange";
})

//========================================================================
//event listener: 2

dinoImg.addEventListener("click", function(){
    dinoImg.style.border = "2px solid red";
})

//========================================================================
//event listener: 3

let featherDino = document.querySelector("#feathers");

featherDino.addEventListener("click", function(){
    featherDino.style.opacity = "50%";
})

//========================================================================
//event listener: 4 + stretch goals (1)

let button = document.querySelector("#toggle");
let dinoRow = document.querySelector("#row");
let clicked = false;

button.addEventListener("click", function(){
    if (clicked === false){
        dinoRow.style.backgroundColor = "pink";
        clicked = true;
    } 
    
    else if (clicked === true){
        dinoRow.style.backgroundColor = "white";
        clicked = false;
    }
    //can't do two if statements because:
    //first "if" would change the booleon to true, and run it through the second if statement because it fulfills the if statement's condition
})


//or:

// if (dinoRow.style.backgroundColor === "pink"){
//     dinoRow.style.backgroundColor = "white";

// } else{
//     dinoRow.style.backgroundColor = "pink";
// }

//========================================================================
//event listener: 5 + stretch goals (2)

let hoverBig = document.querySelector("#biggify");

hoverBig.addEventListener("mouseenter", function(){
    hoverBig.style.width = "200px";
})

hoverBig.addEventListener("mouseleave", function(){
    hoverBig.style.width = "162px";
})
