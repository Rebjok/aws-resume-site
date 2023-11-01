const counter = document.querySelector(".counter-number")
async function updateCounter(){
    let response = await fetch("https://a23p6gy35ux2427qhbsuuijf7u0rubki.lambda-url.eu-west-2.on.aws/")
    let data = await response.json()
    counter.innerHTML = `Views: ${data}`
}
updateCounter()