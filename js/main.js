document.getElementById('donate-btn-1')
.addEventListener('click', function(){
const donateInput = document.getElementById('input-donate').value;
const inputNumber = parseFloat(donateInput);

const mainBalance = document.getElementById('main-balance').innerText;
const newBalance = parseFloat(mainBalance);

const subBalance = document.getElementById('sub-balance').innerText;
const newSubBalance = parseFloat(subBalance);
console.log(inputNumber, newBalance, newSubBalance)

if (inputNumber < newBalance ){

const totalSubBalance = newSubBalance + inputNumber ;

document.getElementById('sub-balance').innerText= totalSubBalance ;

const newMainBalance = newBalance - inputNumber ;

document.getElementById('main-balance').innerText = newMainBalance ;


} else {
    alert ('Faild to add Money')
}
})



