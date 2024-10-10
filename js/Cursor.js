document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("follow")
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
})