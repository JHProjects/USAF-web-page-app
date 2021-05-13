let pressAnyKeyElement = document.querySelector("#press-any-key")
let logo = document.querySelector("#logo")
let canvas = document.querySelector("#canvas")

let p1 = document.querySelector("#p-1")
let p2 = document.querySelector("#p-2")
let p3 = document.querySelector("#p-3")
let p4 = document.querySelector("#p-4")
let p5 = document.querySelector("#p-5")
let p6 = document.querySelector("#p-6")

let positionPool = [p1, p2, p3, p4, p5, p6]; 
let positionCount = positionPool.length

let wordPool = [
	"Újezd",
	"Walls",
	"Street",
	"Artist",
	"Can",
	"Talk",
	"Words",
	"They",
	"Voice",
	"Color"
]; let wordCount = wordPool.length


setTimeout((e) => {p1.style.opacity = 0}, 499)

var insertWords = setInterval((e) => {insertWord()}, 500)

function insertWord() {
	let ranPosition = numGen(positionCount)
	let ranWord = numGen(wordCount)

	positionPool[ranPosition].style.opacity = 1
	positionPool[ranPosition].innerHTML = wordPool[ranWord]

	console.log("word index:" + ranWord)
	console.log("position index:" + ranPosition)
	setTimeout((e) => {
		positionPool[ranPosition].style.removeProperty("opacity")
		console.clear()
	}, 499)
}

setTimeout(e => {document.addEventListener("click", finish)}, 6000)
setTimeout(e => {document.addEventListener("keyup", finish)}, 6000)

function finish() {
	pressAnyKeyElement.innerHTML = " "
	clearInterval(insertWords)

	p2.addEventListener("click", changeWordOnClick)
	p3.addEventListener("click", changeWordOnClick)
	p4.addEventListener("click", changeWordOnClick)
	function changeWordOnClick() {
		let ranWord2 = numGen(wordCount)
		this.innerHTML = wordPool[ranWord2]
		console.log(wordPool[ranWord2])
	}

	setTimeout(e => {
		p1.innerHTML = "Újezd"
		p1.style.opacity = 1
		p1.style.textShadow = ".065em 0 #0F0, -.065em 0 #0F0"
		p1.style.color = "#000"
	}, 1000)
	setTimeout(e => {
		p2.innerHTML = "Walls"
		p2.style.opacity = 1
	}, 1500)
	setTimeout(e => {
		p3.innerHTML = "Street"
		p3.style.opacity = 1
	}, 2000)
	setTimeout(e => {
		p4.innerHTML = "Artist"
		p4.style.opacity = 1
	}, 2500)
	setTimeout(e => {
		p5.innerHTML = "Can"
		p5.style.color = "#000"
		p5.style.textShadow = ".06em 0 #0F0, -.06em 0 #0F0"
		p5.style.opacity = 1
	}, 3000)
	setTimeout(e => {
		p6.innerHTML = "Talk"
		p6.style.color = "#000"
		p6.style.textShadow = ".06em 0 #0F0, -.06em 0 #0F0"
		p6.style.opacity = 1
	}, 3500)
	/* setTimeout(e => {
		logo.style.visibility = "visible"
	}, 7000) */
	setTimeout(e => {
		pressAnyKeyElement.innerHTML = "Click Here to Continue"
		pressAnyKeyElement.addEventListener("click", e => {
			document.body.classList.add("fade-out")
			setTimeout(e => {
				window.location.href = "./home-page.html"
			}, 2000)
			
		})
	}, 5000)

}


// 10 second timer for the hint text to appear
setTimeout(e => {pressAnyKeyElement.style.visibility = "visible"}, 10000)

// Random Number Generator (generates 0 —> num)
function numGen(num) {
	return Math.floor(Math.random() * num)
}
