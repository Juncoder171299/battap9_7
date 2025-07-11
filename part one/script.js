function changeStyle() {
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.fontSize = "30px";
    document.getElementById("text").innerText = "hello everyone";

}
function toggleStyle() {
    document.getElementById("para").classList.toggle("hightlight");
}
function changeBackground() {
    document.body.classList.toggle("newbackground");
}
function creatNewElement() {
    const div = document.createElement("div");
    div.textContent = "Chào học viên!";
    document.getElementById("container").appendChild(div);
}