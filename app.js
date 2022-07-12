const colorEls = document.querySelectorAll('.color')
const hexValueEls = document.querySelectorAll('.hex-val')
const colorPicker = document.getElementById('color-picker')
const colorScheme = document.getElementById('color-scheme')
let copyText = ""

function genColors() {
    const initialColor = colorPicker.value.replace('#', "")
    const scheme = colorScheme.value
    // colorEls[0].style.backgroundColor = colorPicker.value
    // hexValueEls[0].textContent = colorPicker.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${initialColor}&mode=${scheme}&count=5`)
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < colorEls.length; i++){
                colorEls[i].style.backgroundColor = data.colors[i].hex.value
                hexValueEls[i].textContent = data.colors[i].hex.value
        }})
}

hexValueEls.forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault()
        copyText = event.target.textContent
        // console.log(event.target.style.backgroundColor)
        navigator.clipboard.writeText(copyText)
        // alert(`Copied: ${copyText}`)
    })
})
