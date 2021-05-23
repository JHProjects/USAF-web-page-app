let touchStartX = 0
let touchEndX = 0

const swipeableImg = document.querySelector(".random-photo")

imgPool = [
	"Comunism-memorial.jpg",
	"Babies.jpg",
	"tucnaci.jpg",
	// "macha.jpg",
	// "bill.png"
]; let imgCount = imgPool.length

let ranPhotoNum = numGen(imgCount)

swipeableImg.addEventListener("touchstart", e => {touchStartX = e.changedTouches[0].screenX}, false)
swipeableImg.addEventListener("touchend", e => {touchEndX = e.changedTouches[0].screenX; handleGesture()}, false)

randomizePhoto(ranPhotoNum)

function randomizePhoto(index) {
	swipeableImg.src = `./IMG/${imgPool[index]}`
	swipeableImg.index = index
	console.log(`current image ID -> ${swipeableImg.index}`)
}

function handleGesture() {
	let currentImgID = swipeableImg.index
	if (touchEndX < touchStartX) {
		// swiped left
		if (currentImgID == 0) {
			randomizePhoto(imgCount)
		} else {
			randomizePhoto(currentImgID - 1)
		}
	}
	if (touchEndX > touchStartX) {
		// swiped right
		if (currentImgID == imgCount) {
			randomizePhoto(0)
		} else {
			randomizePhoto(currentImgID + 1)
		}
	}
	if (touchEndX == touchStartX) {
		// tapped
		alert("You tapped the screen! Picture randomized!")
		randomizePhoto(numGen(imgCount))
	}
}


// Random Number Generator (generates 0 —> num)
function numGen(num) {
	return Math.floor(Math.random() * num)
}