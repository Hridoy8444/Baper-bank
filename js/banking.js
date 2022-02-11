function getInputValue(inputId){
    const newDepositInput = document.getElementById(inputId);
    const newDepositAmountText = newDepositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    newDepositInput.value = '';
    return newDepositAmount;
}
function updateTotalFeild(totalFeildId, newDepositAmount){
    const depositTotal = document.getElementById(totalFeildId);
    const newDepositTotalText = depositTotal.innerText;
    const newDepositTotal = parseFloat(newDepositTotalText)
    const newDepositBalance = newDepositTotal + newDepositAmount;
    depositTotal.innerText = newDepositBalance;
}
function getCurrentBalance(){
    const currentBalance = document.getElementById('balance-total');
    const newCurrentBalanceText = currentBalance.innerText;
    const newCurrentBalance = parseFloat(newCurrentBalanceText);
    return newCurrentBalance;
}
function updateBalanceFeild(newDepositAmount, isAdd){
    const currentBalance = document.getElementById('balance-total');
    const newCurrentBalance = getCurrentBalance();
    // const newCurrentBalanceText = currentBalance.innerText;
    // const newCurrentBalance = parseFloat(newCurrentBalanceText);
    
    if(isAdd == true){
        const balanceUpdate = newCurrentBalance + newDepositAmount;
        currentBalance.innerText =  balanceUpdate;
    }
    else{
        const balanceUpdate = newCurrentBalance - newDepositAmount;
        currentBalance.innerText = balanceUpdate;
    }
}

document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount = getInputValue('deposite-amount');
    
    if( newDepositAmount > 0){
        updateTotalFeild('deposit-total', newDepositAmount);
        updateBalanceFeild(newDepositAmount, true);
    }
    
    
    
});
document.getElementById('withdraw-btn').addEventListener('click', function(){
    
    const newWithdrewAmount = getInputValue('withdraw-amount');
    const currentBalance = getCurrentBalance();
    if(newWithdrewAmount > 0 && currentBalance > newWithdrewAmount){
        updateTotalFeild('withdraw-total', newWithdrewAmount);
        updateBalanceFeild(newWithdrewAmount, false);
    }
    

    
} );