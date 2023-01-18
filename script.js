const btns = document.querySelectorAll(".btn")
const week = document.querySelector(".week")
const month = document.querySelector(".month")
const day = document.querySelector(".day")
const display = document.querySelectorAll(".disp")



function removeact() {
    display.forEach(out => {
        out.classList.remove("active")
    })
}

function removeColors() {
    week.style.color = "hsl(235, 45%, 61%)"
    day.style.color = "hsl(235, 45%, 61%)"
    month.style.color = "hsl(235, 45%, 61%)"
}



week.addEventListener("click", () => {
    removeact()
    removeColors()
    week.style.color = "white"
    const weekly = document.querySelectorAll(".weekly")
    weekly.forEach(el => {
        el.classList.add("active")
    })
    
})

day.addEventListener("click", () => {
    removeact()
    removeColors()
    day.style.color = "white"
    const daily = document.querySelectorAll(".daily")
    daily.forEach(el => {
        el.classList.add("active")
    })
    
})

month.addEventListener("click", () => {
    removeact()
    removeColors()
    month.style.color = "white"
    const monthly = document.querySelectorAll(".monthly")
    monthly.forEach(el => {
        el.classList.add("active")
    })
})


