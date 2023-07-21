const primaryColors = [
    "yellow",
    "blue",
    "red",
    "yellow",
];

const secondaryColors = [
    "green",
    "orange",
    "purple",
]

const secondaryColorsCombinations = {
    //        combination
    "green": [primaryColors[0], primaryColors[1]],
    "orange": [primaryColors[0], primaryColors[2]],
    "purple": [primaryColors[1], primaryColors[2]]
};

const main = document.getElementById("main");
const section = document.getElementById("section");
const message = document.getElementById("message");
const button = document.getElementById("button");

currentIndex = 0;

button.addEventListener("click", () => {
    main.setAttribute("style", "background-color: "+secondaryColors[currentIndex]);
    section.setAttribute("style", "background-color: "+primaryColors[currentIndex]);
    message.setAttribute("style", "color: black");
    button.innerText = primaryColors[currentIndex+1];

    currentIndex === 2? currentIndex = 0: currentIndex++;
})