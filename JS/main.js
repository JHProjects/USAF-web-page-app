let pressAnyKeyElement = document.querySelector("#press-any-key")
let wordPool = [
	"Újezd",
	"Walls",
	"Street",
	"Artist",
	"Can",
	"Talk"
]



// 10 second timer for the hint text to appear
setTimeout(e => {
	pressAnyKeyElement.style.visibility = "visible"

}, 5000)

// Random Number Generator (generates 0 —> num)
function numGen(num) {
	return Math.floor(Math.random() * num)
}
