const primaryColors = [
    "yellow",
    "blue",
    "red",
    "yellow",
];

// primary colors combinations
const secondaryColors = [
    "green",
    "purple",
    "orange",
]

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