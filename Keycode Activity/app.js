const displayKey = document.querySelector(".eventKeyH2");
const displayEventCode = document.querySelector(".eventCodeH2");
const displayKeyWhich = document.querySelector(".eventWhichH2");

window.addEventListener("keydown",(e) => {
    displayKey.innerText = e.key;
    displayKeyWhich.innerText = e.keyCode;
    displayEventCode.innerText = e.code;
})

