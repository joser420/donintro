console.log("script started");

//variable to track
let clicks = 0;
//value
let cliclValue = 1;
//store click conter
let clickDisplay = document.getElementById("click-display");
//level display
let levelDisplay = document.getElementById("level-display")

// set text for click 
clickDisplay.innerText = "clicks:" + clicks;
//each time click called
function handleclick(){
    console.log("click");
    // Add one to click count
    clicks = clicks + cliclValue;
    // Update click co1unt display h1
    clickDisplay.innerText = "Clicks: " + clicks;
    
    if (clicks == 10){
        alert("congrats!");
        levelDisplay.innerText = "level 2";
        cliclValue = 2;
    }
}

        
