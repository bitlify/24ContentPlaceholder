const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const nameEl = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll("animated-bg-text");

function getData() {
    header.innerHTML =
        "<img src='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80' alt='image'>";
    title.innerHTML = "Lorem ipsum dolor sit amet";
    excerpt.innerHTML =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, minus.";
    profile_img.innerHTML = "<img src='img/profile.jpg' alt='Profile Image'>";
    nameEl.innerHTML = "John Doe";
    date.innerHTML = "Dec 28, 2020";

    animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
    animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}

setTimeout(getData, 1500);
