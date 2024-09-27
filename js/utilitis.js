function showSectionById (id){
    document.getElementById('Donate-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}


function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).Value;
    const inputNum = parseFloat(inputValue);

    return inputNum ;

}

function getBalanceTextById (id){

    const balanceText = document.getElementById(id).innerText;
    const balanceNum = parseFloat(balanceText);

    return balanceNum ;
}


function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
}