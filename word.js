let start = document.querySelector(".btn1")
let answer
let check = document.querySelector(".btn2")
let input = document.querySelector(".text")




start.addEventListener("click", () => {
    fetch("https://random-word-api.herokuapp.com/word")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            answer = data[0]
            console.log(answer);

        })
})
check.addEventListener("click", () => {
    if (input.value == answer) {
        alert("wow,...your answer is correct")
        input.value = ""
        fetch("https://random-word-api.herokuapp.com/word")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                answer = data[0]
                console.log(answer);


            })
    } else {
        alert("oh no....your answer is wrong")
        input.value = ""
    }



})