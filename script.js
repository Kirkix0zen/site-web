// identifier le btn
const btn = document.getElementById("btn")

// definir une function
function handleClick(e) {
	e.target.innerHTML = "vive la mere patrie nul ne la trahira"
}

// rachouter une click event
btn.addEventListener("click", handleClick)

// log pour tester
// console.log("test ...", btn)