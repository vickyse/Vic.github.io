function openform() {
    document.getElementById("myform").style.display = "block";
}
function closeform() {
    document.getElementById("myform").style.display = "none";
}
/* */

var foodImages = [
    "images/0d1e6e77d6ef7358.jpg",
    "images/0F6AE1E2-66B6-5A19-9BF8-A806E2A6F9F9.jpeg",
    "images/46122EDE-B288-4BB8-D1F6-71834769D16B.jpeg",
    "images/180414-7405-00-vQXY0.jpg",
    "images/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
    "images/20180219160438_56.jpg",
    "images/49661295638_74c97031c1_c (1).jpg",
    "images/20181009212526-e8f06146.jpg",
    "images/台南阿星鹹粥-6-1-B.jpg",
    "images/def60fec31ef829fa49c99b88139f0df.jpg",
    "images/hhhhhhh-1551949260.jpg",
    "images/item_17650_011d4c7736cb87bf7f676e69c9896100.jpeg",
    "images/maxresdefault.jpg",
];

let imgElements = document.getElementsByClassName("foodimage");

for (let i = 0; i < imgElements.length; i++) {
    let randomIndex = Math.floor(Math.random() * foodImages.length);
    imgElements[i].src = foodImages[randomIndex];
    foodImages.splice(randomIndex, 1);
}
/* */

function add_to_favorite(foodName) {
    let favorites = localStorage.getItem("favorites");
    if (!favorites) {
        favorites = [];
    } else {
        favorites = JSON.parse(favorites);
    }

    if (favorites.includes(foodName)) {
        alert("This food is already in your favorites!");
        return;
    }

    favorites.push(foodName)
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Command done!")
}

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

function show_favorite() {
    let favorites = localStorage.getItem("favorites");
    if (!favorites) {
        alert("Seems like you didn't add anything into you favorite...");
        return;
    }
    favorites = JSON.parse(favorites);
    let list = document.getElementById("favorites_list");
    favorites = removeDuplicates(favorites);

    for (let i = 0; i < favorites.length; i++) {
        let item = document.createElement("li");
        item.innerText = favorites[i];
        list.appendChild(item);
    }

}
/* localStorage.clear(); */

/* */

let btn = document.querySelector(".menu_for_mobile span")
let show_menu = document.querySelector(".show_menu")
let flag = 0
btn.onclick = function () {
    if (flag === 0) {
        show_menu.style.display = "block"
        flag = 1
    } else {
        show_menu.style.display = "none"
        flag = 0
    }
}