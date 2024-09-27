document.getElementById('donate-btn-1')
    .addEventListener('click', function () {
        const donateInput = document.getElementById('input-donate').value;
        const inputNumber = parseFloat(donateInput);

        const mainBalance = document.getElementById('main-balance').innerText;
        const newBalance = parseFloat(mainBalance);

        const subBalance = document.getElementById('sub-balance').innerText;
        const newSubBalance = parseFloat(subBalance);


        if (inputNumber < newBalance) {

            const totalSubBalance = newSubBalance + inputNumber;

            document.getElementById('sub-balance').innerText = totalSubBalance;

            const newMainBalance = newBalance - inputNumber;

            document.getElementById('main-balance').innerText = newMainBalance;



        } else {
            alert('Failed to donate Money')
        }
    })
// card 2 start

document.getElementById('donate-btn-2').addEventListener('click', function () {

    const inputValue2 = document.getElementById('input-donate-2').value;
    const inputValue2Num = parseFloat(inputValue2);


    const balanceNumber = getbalanceTextById('sub-balance-1');

    const mainBalance2 = getbalanceTextById('main-balance');

    if (inputValue2Num < mainBalance2) {
        const newSubBalance2 = inputValue2Num + balanceNumber;
        document.getElementById('sub-balance-1').innerText = newSubBalance2;
        const newMainBalane2 = mainBalance2 - inputValue2;
        document.getElementById('main-balance').innerText = newMainBalane2;
    }
    else {
        alert('Failed to donate Money');
    }
})


// card 3 start


document.getElementById('donate-btn-3').addEventListener('click', function () {



    const inputValue3 = document.getElementById('input-donate-3').value;
    const inputValue3Num = parseFloat(inputValue3);



    const subBalanceNum = getbalanceTextById('sub-balance-2');

    const mainBalance3 = getbalanceTextById('main-balance');

    if (inputValue3Num <= mainBalance3) {
        const newSubbalance3 = inputValue3Num + subBalanceNum;
        const newMainBalance3 = mainBalance3 - inputValue3Num;

        document.getElementById('sub-balance-2').innerText = newSubbalance3;
        document.getElementById('main-balance').innerText = newMainBalance3;


    }
    else {
        alert('Failed to donate Money');
    }

})
