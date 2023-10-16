var arr = [
  { dp: "images/IMG_20220825_155002.jpg", story: "images/story1.jpg" },
  { dp: "images/dapimg2.jpg", story: "images/story2.jpg" },
  { dp: "images/dapimg3.jpg", story: "images/story3.jpg" },
  { dp: "images/dapimg4.jpg", story: "images/story4.jpg" },
];

var storiyaan = document.querySelector("#storiyaan")
var clutter = ""

arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}">
            </div>`;
})

storiyaan.innerHTML = clutter
storiyaan.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${
      arr[dets.target.id].story
    })`;

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none";
    },3000)
})
