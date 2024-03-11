const baseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")

const dropdowns = document.querySelectorAll(".dropdown select")
const btn = document.querySelector(".btn");
const msg = document.querySelector(".msg");

for(let select of dropdowns){
    select.addEventListener("change",(evt) => {
        updateFlags(evt.target)
    })
}

const updateFlags = (element) => {
    // element is the tag where the change is happened i.e in select tag
    const currCode = element.value
    const newSrc = `https://flagsapi.com/${currCode}/shiny/64.png`;
    const img = element.parentElement.querySelector("img");
    img.src = newSrc
}

btn.addEventListener("click", async (evt) =>{
    evt.preventDefault(); //preventing the default function of button so that we can customise its click function
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amount < 1 || amount === "" )
    {
        amount.value = "1";
        amtVal = 1;
    }
})

// This code has complete logic the free api is not working as it requires country code inr for rate and IN for image for INDIA
const URL = `${baseURL}/${fromCurr.value.toLowerCase()}.json`;
let response = fetch(URL);
console.log(response)
let data = response.json();
let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
let final = amtVal * rate;
msg.innerHTML = `${amtVal} ${fromCurr} = ${final} ${toCurr}`;
