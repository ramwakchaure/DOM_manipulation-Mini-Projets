var istatus = document.querySelector("h5")

var btn = document.querySelector("#add")

var check = 0

btn.addEventListener("click", function(){
    if(check == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "darkgreen"
    btn.innerHTML = "Remove Friend" 
    btn.style.backgroundColor = "red"   
    check = 1
    }else{
        istatus.innerHTML = "Unknown"
        istatus.style.color = "red"
        btn.innerHTML = "Add friend"
        check = 0
        btn.style.backgroundColor = "green"
    }
    
})
