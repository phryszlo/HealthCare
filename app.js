


window.addEventListener("DOMContentLoaded", () => {
  console.log("event")
  setTimeout(() => {
    console.log("timeout")
    const mainDiv = document.querySelector(".main-content");
    console.log(mainDiv)
    mainDiv.classList.add("visible");
  }, 4000)
})