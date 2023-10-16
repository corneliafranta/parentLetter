let parentLetterData = {}
let activeButton = ""
let setUpPage = function () {
    let textCont = document.getElementById("text-container")
    let buttonCont = document.getElementById("button-bar")

    textCont.innerHTML = parentLetterData["Deutsch"]
    for (let lang in parentLetterData) {
        let button = document.createElement("button")

        if (lang === "Deutsch") {
            button.setAttribute("class", "language-button active")
            activeButton = lang
        } else {
            button.setAttribute("class", "language-button")
        }
        button.innerHTML = lang
        button.addEventListener("click", function (self) {
            setButtonColor(self.target)
            const text = parentLetterData[lang]
            setText(text)
        })
        buttonCont.append(button)
    }
}


let setText = function (text) {
    let textCont = document.getElementById("text-container")
    textCont.innerHTML = text

}

let setButtonColor = function (clickedButton) {
    let current_button = document.getElementsByClassName("active")[0]
    current_button.setAttribute("class", "language-button")
    clickedButton.setAttribute("class", "language-button active")
}


fetch("./parentletterdata.json")
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        parentLetterData = data
        setUpPage()
    })







