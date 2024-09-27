function showSectionById (id){
    document.getElementById('Donate-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');

    document.getElementById('id').classList.remove('hidden');
}


function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).Value;
    const inputNum = parseFloat(inputValue);

    return inputNum ;

}

function getbalanceTextById (id){

    const balanceText = document.getElementById(id).innerText;
    const balanceNum = parseFloat(balanceText);

    return balanceNum ;
}
