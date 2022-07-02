let div6 = document.getElementsByClassName("div6")
for (let i = 0; i < div6.length; i++) {
    div6[i].addEventListener("click", () => {
        document.querySelector(".div1").style.opacity = 1;
        document.querySelector(".div5").style.opacity = 0;
        div6[0].style.background = "rgb(238, 238, 243)"
        div6[1].style.background = "rgb(238, 238, 243)"
        div7[0].style.background = ""
        div7[1].style.background = ""
    })
}


let div7 = document.getElementsByClassName("div7")

for (let i = 0; i < div7.length; i++) {
    div7[i].addEventListener("click", () => {
        div7[0].style.background = "rgb(238, 238, 243)"
        div7[1].style.background = "rgb(238, 238, 243)"
        div6[0].style.background = ""
        div6[1].style.background = ""
        document.querySelector(".div1").style.opacity = 0;
        document.querySelector(".div5").style.opacity = 1;
    })
}