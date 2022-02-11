document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositInput = document.getElementById('deposite-amount');
    const newDepositAmountText = newDepositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositTotal = document.getElementById('deposit-total');
    const newDepositTotalText = depositTotal.innerText;
    const newDepositTotal = parseFloat(newDepositTotalText)
    const newDepositBalance = newDepositTotal + newDepositAmount;
    depositTotal.innerText = newDepositBalance;
    newDepositInput.value = '';
    const currentBalance = document.getElementById('balance-total');
    const newCurrentBalanceText = currentBalance.innerText;
    const newCurrentBalance = parseFloat(newCurrentBalanceText);
    const balanceUpdate = newCurrentBalance + newDepositAmount;
    currentBalance.innerText =  balanceUpdate;
    
});
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrewInput = document.getElementById('withdraw-amount');
    const newWithdrewAmountText = newWithdrewInput.value
    const newWithdrewAmount = parseFloat(newWithdrewAmountText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const newWithdrewTotalText = withdrawTotal.innerText;
    const newWithdrewTotal = parseFloat(newWithdrewTotalText);
    const newWithdrewBalance = newWithdrewTotal + newWithdrewAmount;
    withdrawTotal.innerText = newWithdrewBalance;
    newWithdrewInput.value = '';

    const currentBalance = document.getElementById('balance-total');
    const newCurrentBalanceText = currentBalance.innerText;
    const newCurrentBalance = parseFloat(newCurrentBalanceText);
    const balanceUpdate = newCurrentBalance - newWithdrewAmount;
    currentBalance.innerText = balanceUpdate;
} )