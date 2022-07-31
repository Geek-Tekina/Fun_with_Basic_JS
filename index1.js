// document.querySelectorAll("button")[0].addEventListener("click",function(){alert("N1")});
// document.querySelectorAll("button")[1].addEventListener("click",function(){alert("N2")});
// document.querySelectorAll("button")[2].addEventListener("click",function(){alert("N3")});
// document.querySelectorAll("button")[3].addEventListener("click",function(){alert("N4")});
// document.querySelectorAll("button")[4].addEventListener("click",function(){alert("N5")});
// document.querySelectorAll("button")[5].addEventListener("click",function(){alert("N6")});
// document.querySelectorAll("button")[6].addEventListener("click",function(){alert("N7")});
for (var i = 0; i < document.querySelectorAll(".drum").length; ++i) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonno = this.innerHTML;

        switch (buttonno) {
            case "w": var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "w": var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "a": var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "s": var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "d": var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "j": var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "k": var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "l": var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
        }
    });
}

document.addEventListener("keypress",function(event){
    var keypressed = event.key;
    switch(keypressed)
    {
        case "w": var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "w": var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "a": var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "s": var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "d": var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "j": var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "k": var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "l": var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
    }
})