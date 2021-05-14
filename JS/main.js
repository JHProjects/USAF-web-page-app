var touchStartX = 0
var touchEndX = 0

let swipableImg = document.querySelector(".random-photo")

imgPool = [
	"Comunism-memorial.jpg",
	"Babies.jpg",
	"tucnaci.jpg",
	"macha.jpg"
]; let imgCount = imgPool.length

let ranPhotoNum = numGen(imgCount)

swipableImg.addEventListener("touchstart", function(e) {touchStartX = e.screenX})
swipableImg.addEventListener("touchend", function(e) {touchEndX = e.screenX; handleGesture()})

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
}


randomizePhoto(ranPhotoNum)
function randomizePhoto(index) {
	swipableImg.src = `./IMG/${imgPool[index]}`
}






// Random Number Generator (generates 0 —> num)
function numGen(num) {
	return Math.floor(Math.random() * num)
}