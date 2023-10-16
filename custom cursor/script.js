var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove", function(moveit){
    crsr.style.left = moveit.x+"px"
    crsr.style.top = moveit.y+"px"
})