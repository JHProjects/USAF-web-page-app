let touchStartX = 0
let touchEndX = 0

const swipeableImg = document.querySelector(".random-photo")

imgPool = [
	"Comunism-memorial.jpg",
	"Comunism-memorial.jpg",
	"Comunism-memorial.jpg",
	"Comunism-memorial.jpg",
	"Babies.jpg",
	"Babies.jpg",
	"Babies.jpg",
	"Babies.jpg",
	"tucnaci.jpg",
	"tucnaci.jpg",
	"tucnaci.jpg",
	"macha.jpg",
	"macha.jpg",
	"macha.jpg",
	"bill.png"
]; let imgCount = imgPool.length

let ranPhotoNum = numGen(imgCount)

swipeableImg.addEventListener("touchstart", e => {touchStartX = e.changedTouches[0].screenX}, false)
swipeableImg.addEventListener("touchend", e => {touchEndX = e.changedTouches[0].screenX; handleGesture()}, false)

function handleGesture() {
	if (touchEndX < touchStartX) {
		alert("left")
		var ranPhotoNum = ranPhotoNum - 1
		if (prewPhoto == 0) {prewPhoto = imgCount}
		randomizePhoto(prewPhoto)
	}
	if (touchEndX > touchStartX) {
		alert("right")
		var ranPhotoNum = ranPhotoNum + 1
		if (prewPhoto == imgCount) {prewPhoto = 0}
		randomizePhoto(nextPhoto)
	}
	if (touchEndX == touchStartX) {
		alert("click")
		var ranPhotoNum = ranPhotoNum + 1
		if (prewPhoto == imgCount) {prewPhoto = 0}
		randomizePhoto(nextPhoto)
	}
}


randomizePhoto(ranPhotoNum)
function randomizePhoto(index) {
	swipeableImg.src = `./IMG/${imgPool[index]}`
}






// Random Number Generator (generates 0 —> num)
function numGen(num) {
	return Math.floor(Math.random() * num)
}