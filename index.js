

for(i = 0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll("button")[i].addEventListener("click",handleClick);
        
}


function handleClick(){
   var botton = this.innerHTML;
   makeSound(botton);
   buttomAnimation(botton);
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttomAnimation(event.key);
},300);

function buttomAnimation(currentKey){
var elemento=  document.querySelector("." + currentKey);
elemento.classList.add("pressed");

setTimeout(function(){
    elemento.classList.remove("pressed")
});

}

function makeSound(key){
 
    switch(key){
    case "w" :
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;

    case "a" :
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

        case "s" :
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

        case "d" :
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

            case "j" :
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

            case "k" :
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

                case "l" :
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

                default:

 }

}
   
