// add event listeners for each drum button (click event)
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    // when a drum button is clicked, play the corresponding sound and animate the button
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

// add event listener for keydown event (keyboard press)
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// play sound based on the key pressed
function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("assets/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("assets/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let kick = new Audio("assets/kick-bass.mp3");
            kick.play();
            break;
        case "d":
            let crash = new Audio("assets/crash.mp3");
            crash.play();
            break;
        case "j":
            let snare = new Audio("assets/snare.mp3");
            snare.play();
            break;
        case "k":
            let tom3 = new Audio("assets/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio("assets/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(buttonInnerHtml);
    }
}

// animate the button when pressed
function buttonAnimation(key) {
    let activeBtn = document.querySelector("." + key);
    activeBtn.classList.add("pressed");
    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    }, 200);
}

//get elements
const modal = document.querySelector('.modal');
const rulesButton = document.getElementById('rules');

// when the rules button is clicked, display the modal
rulesButton.addEventListener('click', function () {
    modal.style.display = 'block';
});

// close the modal if clicked outside of its content
modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});