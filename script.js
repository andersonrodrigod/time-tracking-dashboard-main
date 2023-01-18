

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


week.addEventListener("click", () => {
    removeact()
    const weekly = document.querySelectorAll(".weekly")
    weekly.forEach(el => {
        el.classList.add("active")
    })
})

day.addEventListener("click", () => {
    removeact()
    const daily = document.querySelectorAll(".daily")
    daily.forEach(el => {
        el.classList.add("active")
    })
})

month.addEventListener("click", () => {
    removeact()
    const monthly = document.querySelectorAll(".monthly")
    monthly.forEach(el => {
        el.classList.add("active")
    })
})


