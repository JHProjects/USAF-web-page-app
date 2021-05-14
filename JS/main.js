let touchStartX = 0
let touchEndX = 0

const swipableImg = document.querySelector(".random-photo")

imgPool = [
	"Comunism-memorial.jpg",
	"Babies.jpg",
	"tucnaci.jpg",
	"macha.jpg"
]; let imgCount = imgPool.length

let ranPhotoNum = numGen(imgCount)

swipableImg.addEventListener("touchstart", e => {touchStartX = e.changedTouches[0].screenX}, false)
swipableImg.addEventListener("touchend", e => {touchEndX = e.changedTouches[0].screenX; handleGesture()}, false)

function handleGesture() {
	if (touchEndX < touchStartX) {
		alert("left")
		prewPhoto = ranPhotoNum - 1
		randomizePhoto(prewPhoto)
	}
	if (touchEndX > touchStartX) {
		alert("right")
		nextPhoto = ranPhotoNum + 1
		randomizePhoto(nextPhoto)
	}
	if (touchEndX == touchStartX) {
		alert("click")
		nextPhoto = ranPhotoNum + 1
		randomizePhoto(nextPhoto)
	}
}


randomizePhoto(ranPhotoNum)
function randomizePhoto(index) {
	swipableImg.src = `./IMG/${imgPool[index]}`
}






// Random Number Generator (generates 0 —> num)
function numGen(num) {
	return Math.floor(Math.random() * num)
}