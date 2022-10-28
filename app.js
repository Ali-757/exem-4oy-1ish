let formEl = document.querySelector("#form-el");
let inputEl = document.querySelector("#input-el");
let textEl = document.querySelector("#text");
let pFirs = document.querySelector("#text-pfirs");
let hFirs = document.querySelector("#text-hfirs");
let pSecond = document.querySelector("#text-psecond");
let bigText = document.querySelector("#big-text");
let audioEl = document.querySelector("#audio-el");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputEl.value}`).then(response => response.json())
        .then(data => {
            data.forEach((element) => {
                bigText.innerHTML = `${element.word} - ${element.phonetic}`;
                if (pFirs !== undefined) {
                    pFirs.innerHTML = element.meanings["0"].definitions["0"].definition;
                }
                if (hFirs !== undefined) {
                hFirs.innerHTML = element.meanings["1"].definitions["0"].definition;
                }
                if (pSecond !== undefined) {
                pSecond.innerHTML = element.meanings["2"].definitions["0"].definition;
                }
                audioEl.setAttribute("controls", "");
                audioEl.src = element.phonetics["0"].audio;
            });
        })
        inputEl.value = ""; 
    })