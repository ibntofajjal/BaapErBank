

// Deposit Function 😃 (Pretty Hard But if you are a beginner)
document.getElementById("deposit-button").addEventListener('click', function(){
    // get the deposit input value;
    const depositField = document.getElementById("deposit-amount");
    const depositAmountText = depositField.value;
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    // get the current value and diposited amount;
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + depositAmount;
    depositTotal.innerText = newDepositTotal;

    // Update account Balance.
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    const newBalanceTotal = previousBalanceTotal + depositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit field 
    depositField.value = '';
});

// Withdraw Function (Pretty simple if you undrastand the previous function 😃)
document.getElementById("withdraw-button").addEventListener('click', function(){
   // get the withdraw value from withdraw input
    const withDrawAmountField = document.getElementById("withdraw-amount");
    const withDrawAmountText = withDrawAmountField.value;
    const withDrawAmount = parseFloat(withDrawAmountText);

    // get the withdraw current value;
    const withDrawCurrent = document.getElementById("withdraw-total");
    const withDrawCurrentText = withDrawCurrent.innerText;
    const withDrawCurrentAmount = parseFloat(withDrawCurrentText);

    const totalWithdraw = withDrawAmount + withDrawCurrentAmount;
    withDrawCurrent.innerText = totalWithdraw;

    // Update account Balance.
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    const newBalanceTotal = previousBalanceTotal - totalWithdraw;
    balanceTotal.innerText = newBalanceTotal;

    // clear the withdraw field
    withDrawAmountField.value = '';

});
