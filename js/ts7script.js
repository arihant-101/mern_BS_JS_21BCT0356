window.onload = init; // Assign the init function to run when the window loads

function init() {
    var animation;
    var en = document.getElementById('engine');
    en.style.position = "relative"; // Add quotes around "relative"
    en.style.left = "250px"; // Add quotes around "0px"
    
    // Function to start the animation
    function move() {
        en.style.left = parseInt(en.style.left) + 10 + "px";
        animation = setTimeout(move, 20);
    }

    // Function to stop the animation
    function stop() {
        clearTimeout(animation);
    }

    // Attach the move and stop functions to the buttons
    document.querySelector('button:first-of-type').addEventListener('click', move);
    document.querySelector('button:last-of-type').addEventListener('click', stop);
}
