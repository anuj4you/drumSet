var drumButton = document.getElementsByClassName("drum").length;

for (var i = 0; i < drumButton; i++) {
    document.getElementsByClassName("drum")[i].addEventListener("click", function(){

        var keyClicked = this.innerHTML;
        keySound(keyClicked);
    });      
        

}

// keyboard event listener

document.addEventListener("keydown", function(event){
   // console.log(event);   <-  to check or debug.
    keySound(event.key);
});
    

function keySound(key){
    
    switch (key) {
        case "w":
            var playCurrent = new Audio("sounds/tom-1.mp3");
            playCurrent.play();

            break;

        case "a":
            var playCurrent = new Audio("sounds/tom-2.mp3");
            playCurrent.play();

            break;

        case "s":
            var playCurrent = new Audio("sounds/tom-3.mp3");
            playCurrent.play();

            break;

        case "d":
            var playCurrent = new Audio("sounds/tom-4.mp3");
            playCurrent.play();

            break;

        case "j":
            var playCurrent = new Audio("sounds/kick-bass.mp3");
            playCurrent.play();

            break;

        case "k":
            var playCurrent = new Audio("sounds/snare.mp3");
            playCurrent.play();

            break;

        case "l":
            var playCurrent = new Audio("sounds/crash.mp3");
            playCurrent.play();

            break;


        default:
            console.log("somethng went wrong!")
            break;
    }
}

