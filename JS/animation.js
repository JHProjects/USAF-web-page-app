let continueElement = document.querySelector("#continue")
let logo = document.querySelector("#logo")
let canvas = document.querySelector("#canvas")

let p1 = document.querySelector("#p-1")
let p2 = document.querySelector("#p-2")
let p3 = document.querySelector("#p-3")
let p4 = document.querySelector("#p-4")
let p5 = document.querySelector("#p-5")
let p6 = document.querySelector("#p-6")

let positionPool = [p1, p2, p3, p4, p5, p6]
let positionCount = positionPool.length
let smallPositionPool = [p2, p3, p4]
let smallPositionCount = smallPositionPool.length

let wordPool = [
	"Walls",
	"Street",
	"Artist",
	"Can",
	"Talk",
	"Words",
	"They",
	"Voice",
	"Color",
	"Live",
]; let wordCount = wordPool.length

let tick = 400

setTimeout(e => {document.addEventListener("dblclick", finish)}, 1000)
setTimeout(e => {document.addEventListener("keyup", finish)}, 1000)
setTimeout(e => {p1.style.opacity = 0}, tick - 1)

continueElement.style.visibility = "visible"
continueElement.addEventListener("click", e => {
	document.body.classList.add("fade-out")
	setTimeout(e => {
		window.location.href = "./home-page.html"
	}, tick*4)
			
})

var insertWords = setInterval((e) => {insertWord()}, tick)
let countOfLoops = 0

function insertWord() {
	let ranPosition = numGen(positionCount)
	let ranWord = numGen(wordCount)

	positionPool[ranPosition].style.opacity = 1
	positionPool[ranPosition].innerHTML = wordPool[ranWord]

	if (countOfLoops >= 5) {
		let ranPos2 = numGen(positionCount)
		let ranPos2Backup = numGen(positionCount)
		let ranWord2 = numGen(wordCount)

		// remove doubled posiitons
		if (ranPos2 != ranPosition) {
			positionPool[ranPos2].style.opacity = 1
			positionPool[ranPos2].innerHTML = wordPool[ranWord2]
		} else {
			positionPool[ranPos2Backup].style.opacity = 1
			positionPool[ranPos2Backup].innerHTML = wordPool[ranWord2]
			console.warn(`SPOTS IDENTICAL! > ${ranPos2} ${ranPosition}`)
		}				
	}

	if (countOfLoops >= 12) {
		let ranPos3 = numGen(positionCount)
		let ranPos3Backup = numGen(positionCount)
		let ranWord3 = numGen(wordCount)

		// remove doubled positions
		if (ranPos3 != ranPosition) {
			positionPool[ranPos3].style.opacity = 1
			positionPool[ranPos3].innerHTML = wordPool[ranWord3]
		} else {
			positionPool[ranPos3Backup].style.opacity = 1
			positionPool[ranPos3Backup].innerHTML = wordPool[ranWord3]
			console.warn(`SPOTS IDENTICAL! >> ${ranPos3} ${ranPosition}`)
		}				
	} 

	if (countOfLoops <= 15) {
		setTimeout((e) => {
			positionPool[ranPosition].style.removeProperty("opacity")
		}, tick - 1)
	}

	if (countOfLoops >= 23) {
		finish()
	}

	countOfLoops++
	console.log("count of loops: " + countOfLoops)
}

function finish() {
	clearInterval(insertWords)

	p2.addEventListener("click", changeWordOnClick)
	p3.addEventListener("click", changeWordOnClick)
	p4.addEventListener("click", changeWordOnClick)
	function changeWordOnClick() {
		let ranWord4 = numGen(wordCount)
		this.innerHTML = wordPool[ranWord4]
		console.log(wordPool[ranWord4])
	}

	setTimeout(e => {
		p1.innerHTML = "Újezd"
		p1.style.opacity = 1
		p1.style.textShadow = ".064em 0 #0F0, -.064em 0 #0F0"
		p1.style.color = "#000"
	}, tick*3)
	setTimeout(e => {
		p2.innerHTML = "Walls"
		p2.style.opacity = 1
	}, tick*4)
	setTimeout(e => {
		p3.innerHTML = "Street"
		p3.style.opacity = 1
	}, tick*5)
	setTimeout(e => {
		p4.innerHTML = "Artist"
		p4.style.opacity = 1
	}, tick*6)
	setTimeout(e => {
		p5.innerHTML = "Can"
		p5.style.color = "#000"
		p5.style.textShadow = ".06em 0 #0F0, -.06em 0 #0F0"
		p5.style.opacity = 1
	}, tick*7)
	setTimeout(e => {
		p6.innerHTML = "Talk"
		p6.style.color = "#000"
		p6.style.textShadow = ".06em 0 #0F0, -.06em 0 #0F0"
		p6.style.opacity = 1
		// var insertWords2 = setInterval((e) => {insertWord2()}, tick)
	}, tick*8)
	/* setTimeout(e => {
		logo.style.visibility = "visible"
	}, 7000) */
	setTimeout(e => {
		continueElement.innerHTML = "continue"
	}, tick*10)

}

/* 
let countOfLoops2 = 1
function insertWord2() {
	let ranWord5 = numGen(wordCount)

	countOfLoops2++
	if (countOfLoops2 === 1) {p2.style.opacity = 1; p2.innerHTML = wordPool[ranWord5]}
	if (countOfLoops2 === 2) {p3.style.opacity = 1; p3.innerHTML = wordPool[ranWord5]}
	if (countOfLoops2 === 3) {p4.style.opacity = 1; p4.innerHTML = wordPool[ranWord5]}
	if (countOfLoops2 === 3) {countOfLoops2 = 0}
	
}
*/


// Random Number Generator (generates 0 —> num)
function numGen(num) {
	return Math.floor(Math.random() * num)
}
