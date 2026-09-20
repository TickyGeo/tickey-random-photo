const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://picsum.photos/600/400?random";

function changePhoto() {
    image.src = `${url}=${Math.random()}`;
}

changePhoto();

button.addEventListener("click", () => {
    changePhoto();
});