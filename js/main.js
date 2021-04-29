let lightBoxContainer = document.querySelector(".lightbox-container")
let lightBoxItem = document.querySelector(".lightbox-item")
let imgs = Array.from(document.querySelectorAll(".item img"))
let closeBtn = document.getElementById("closeBtn");
let nxtBtn = document.getElementById("nextBtn")
let prevBtn = document.getElementById("prevBtn")
let currentIndex = 0;

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (e) {
        currentIndex = imgs.indexOf(e.target)
        let imgSrc = e.target.getAttribute("src");
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`
        lightBoxContainer.style.display = "flex";
        lightBoxContainer.style.transition = `display 1s`
    })
}

nxtBtn.addEventListener(`click`, nextSlide)
prevBtn.addEventListener(`click`, prevSlide)

document.addEventListener(`keydown`, function (e) {
    if (e.code == `ArrowRight`) {
        nextSlide()
    }
    else if (e.code == `ArrowLeft`) {
        prevSlide()
    }
    else if (e.code == `Escape`) {
        lightBoxContainer.style.display = `none`
    }
})

function nextSlide() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0
    }
    let imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    let imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}

closeBtn.addEventListener(`click`, clsBtn)

function clsBtn() {
    lightBoxContainer.style.display = `none`
}