console.log("script started");

//variable to track
let clicks = 0;

//store click conter
let clickDisplay = document.getElementById("click-display");

// set text for click 
clickDisplay.innerText = "clicks:" + clicks;
//each time click called
function handleclick(){
    console.log("click");
}
 // Called each time the image is clicked
    function handleClick() {
        console.log("click");
        // Add one to click count
        clicks = clicks + 1;
        // Update click count display h1
        countDisplay.innerText = "Clicks: " + clicks;
    }
    if 
