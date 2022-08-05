let elMarketForm = document.querySelector('.market-form');
let elMarketInput = elMarketForm.querySelector('.market-input');

let elMarketList = document.querySelector('.market-list');


let array = [];

elMarketForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  if (isNaN(elMarketInput.value)) {
    array.push(elMarketInput.value);

    for (item of array) {
      var elItem = document.createElement("li");
      elItem.textContent = item;
    }
  
    elMarketList.appendChild(elItem);
  } else {
    alert("Iltimos Mahsulot nomini to'g'ri kiriting!");
  }

  elMarketInput.value = "";
})