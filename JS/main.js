let ranPhoto = document.querySelector(".random-photo")

imgPool = [
	"Comunism-memorial.jpg",
	"Babies.jpg",
	"tucnaci.jpg",
	"macha.jpg"
]; let imgCount = imgPool.length


ranPhoto.src = `./IMG/${imgPool[numGen(imgCount)]}`






// Random Number Generator (generates 0 —> num)
function numGen(num) {
	return Math.floor(Math.random() * num)
}