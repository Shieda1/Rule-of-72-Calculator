// https://www.omnicalculator.com/finance/rule-of-72

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const doublingtRadio = document.getElementById('doublingtRadio');
const increaseRadio = document.getElementById('increaseRadio');

let doublingt;
let increase = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

doublingtRadio.addEventListener('click', function() {
  variable1.textContent = 'Increase';
  increase = v1;
  result.textContent = '';
});

increaseRadio.addEventListener('click', function() {
  variable1.textContent = 'Doubling t.';
  doublingt = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(doublingtRadio.checked)
    result.textContent = `Doubling t. = ${computedoublingt().toFixed(5)}`;

  else if(increaseRadio.checked)
    result.textContent = `Increase = ${computeincrease().toFixed(5)}`;
})

// calculation

function computedoublingt() {
  return 72 / Number(increase.value);
}

function computeincrease() {
  return 72 / Number(doublingt.value);
}