document.getElementById('donate-btn-1')
    .addEventListener('click', function () {
        const donateInput = document.getElementById('input-donate').value;
        const inputNumber = parseFloat(donateInput);

        const mainBalance = document.getElementById('main-balance').innerText;
        const newBalance = parseFloat(mainBalance);

        const subBalance = document.getElementById('sub-balance').innerText;
        const newSubBalance = parseFloat(subBalance);

        const showModalOne = document.getElementById('my_modal_1')
        if (inputNumber <= newBalance) {


            const totalSubBalance = newSubBalance + inputNumber;

            document.getElementById('sub-balance').innerText = totalSubBalance;

            const newMainBalance = newBalance - inputNumber;

            document.getElementById('main-balance').innerText = newMainBalance;

            const div = document.createElement('div');
            div.innerHTML = `
             <h3 class="font-bold ">${inputNumber} Taka is Donated for Flood Relief in Noakhali,Bangladesh</h3>
             <p> date : (Bangladesh Standard Time) </p>

             `

        document.getElementById('history-container').appendChild(div);

        showModalOne.showModal()

        } else {
            alert('Failed to donate Money')
        }
    })
// card 2 start

document.getElementById('donate-btn-2').addEventListener('click', function () {

    const inputValue2 = document.getElementById('input-donate-2').value;
    const inputValue2Num = parseFloat(inputValue2);

    const balanceNumber = getBalanceTextById('sub-balance-1');

    const mainBalance2 = getBalanceTextById('main-balance');

    const showModalTwo = document.getElementById('my_modal_2');


    if (inputValue2Num <= mainBalance2) {
        const newSubBalance2 = inputValue2Num + balanceNumber;
        document.getElementById('sub-balance-1').innerText = newSubBalance2;
        const newMainBalance2 = mainBalance2 - inputValue2;
        document.getElementById('main-balance').innerText = newMainBalance2;

        const div = document.createElement('div');
        div.innerHTML = `
         <h3 class="font-bold ">${inputValue2Num} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
        <p> date : ${updateTime()} (Bangladesh Standard Time) </p>
        ` 

        document.getElementById('history-container').appendChild(div);

        showModalTwo.showModal()
    }
    else {
        alert('Failed to donate Money');
    }
})


// card 3 start


document.getElementById('donate-btn-3').addEventListener('click', function () {



    const inputValue3 = document.getElementById('input-donate-3').value;
    const inputValue3Num = parseFloat(inputValue3);

    const showModalthree = document.getElementById('my_modal_3')

    const subBalanceNum = getBalanceTextById('sub-balance-2');

    const mainBalance3 = getBalanceTextById('main-balance');

    if (inputValue3Num <= mainBalance3) {
        const newSubbalance3 = inputValue3Num + subBalanceNum;
        const newMainBalance3 = mainBalance3 - inputValue3Num;

        document.getElementById('sub-balance-2').innerText = newSubbalance3;
        document.getElementById('main-balance').innerText = newMainBalance3;
        document.getElementById('my_modal_3')

        const div = document.createElement('div');
        div.innerHTML = `
         <h3 class="font-bold ">${inputValue3Num} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
        <p> date : (Bangladesh Standard Time) </p>
        `

        document.getElementById('history-container').appendChild(div);

        showModalthree.showModal()

    }
    else {
        alert('Failed to donate Money');
    }

})



// show button 

document.getElementById('show-donation').addEventListener('click', function(){

    showSectionById('Donate-container');
})

document.getElementById('show-history').addEventListener('click', function(){

    showSectionById('history-container');
})


