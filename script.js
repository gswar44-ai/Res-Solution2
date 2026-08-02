// ==============================
// Res. Solution Prototype v1.0
// ==============================

console.log("🏢 Res. Solution Loaded Successfully!");


// Welcome Message

window.onload = function(){

    console.log("Welcome to Res. Solution!");

};


// Button Hover Effect

const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.05)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });

});


// Future Features Placeholder

function comingSoon(feature){

    alert(feature + " will be available in a future version.");

}
