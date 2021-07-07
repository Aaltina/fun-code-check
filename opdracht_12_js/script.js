const btn = document.getElementById("mybutton");
btn.addEventListener("click", function () { console.log("Button is clicked") });

//const color = document.querySelector(".blue-background");
//color.addEventListener("click" , function(){color.classList.add("red-background"); })

//const toggelColor = document.querySelector(".blue-background")

const color = document.querySelector(".blue-background");
const toggelColor = () => {
    color.classList.toggle("red-background");
};
myBackgroundButton.addEventListener("click", toggelColor);
