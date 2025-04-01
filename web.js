document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    button.innerText = "Animate Car";
    button.onclick = animateBox;
    document.getElementById("button-container").appendChild(button);

    let car = document.getElementById("animated-box");

    // Create wheels
    let leftWheel = document.createElement("div");
    leftWheel.classList.add("wheel", "left");

    let rightWheel = document.createElement("div");
    rightWheel.classList.add("wheel", "right");

    car.appendChild(leftWheel);
    car.appendChild(rightWheel);
});

function animateBox() {
    let box = document.getElementById("animated-box");
    box.style.transform = box.style.transform === "translateX(100px)" ? "translateX(0)" : "translateX(100px)";
}

