const primaryColors = [
    "yellow",
    "blue",
    "red",
];

const secondaryColors = {
    //        combination
    "green": [primaryColors[0], primaryColors[1]],
    "orange": [primaryColors[0], primaryColors[2]],
    "purple": [primaryColors[1], primaryColors[2]]
};

const main = document.getElementById("main");
const section = document.getElementById("section");
const message = document.getElementById("message");
const button = document.getElementById("button");