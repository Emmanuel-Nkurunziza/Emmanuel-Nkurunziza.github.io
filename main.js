let title = document.querySelector(".profile-name");
const randomColor = () => {
    let colors = ["#03a9fc", "#07fc03", "#de9d12", "#050505", "#b5f25a", "#bd5af2", "#f25aeb", "#5a9cf2", "#f25a9c", "#9e0402", "#1c029e", "#283d1a"];
    let randomIndex = Math.floor(Math.random() * 13);
    return colors[randomIndex]
}
title.addEventListener("click", () => {
    let selectedColor = randomColor();
    title.style.color = selectedColor;
})