// ▓▒▒▒▒▒▒▒▒▒▒▒《 SLECET THE BUTTONS 》▒▒▒▒▒▒▒▒▒▒▒▓
const depositBtn = document.getElementById("deposit-button");
const withdrawBtn = document.getElementById("withdraw-button");


// ▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒❖《 EVENT LISTENERS FUNCTIONS 》❖▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓
depositBtn.addEventListener("click", function(){
    // Select Deposit Current Total Amount
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const depositTotalNumber = parseFloat(depositTotalText);
    // Select the value of Deposit Amount input field
    const newDeposit = document.getElementById("deposit-amount");
    const newDepositText = newDeposit.value;
    const newDepositNumber = parseFloat(newDepositText);
    // Add Current Deposit and new Deposit;
    depositTotal.innerText = depositTotalNumber + newDepositNumber;
    // Clean the deposit input value;
    newDeposit.value = "";
    // ==============================WORK WITH BALANCE FOR DEPOSIT================================= //
    // Select Balance Current Total Amount
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);
    // Add Current Deposit and Update the Balance;
    balanceTotal.innerText = newDepositNumber + balanceTotalNumber;
});


withdrawBtn.addEventListener("click", function(){
    // Select Withdraw Current Total Amount
    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalNumber = parseFloat(withdrawTotalText);
   // Select the value of Withdraw Amount input field
   const newWithdraw = document.getElementById("withdraw-amount");
   const newWithdrawText = newWithdraw.value;
   const newWithdrawNumber = parseFloat(newWithdrawText);
   // Add Current Deposit and new Deposit;
   withdrawTotal.innerText = withdrawTotalNumber + newWithdrawNumber;
   // Clean the Withdraw input value;
   newWithdraw.value = "";
// ==============================》WORK WITH BALANCE FOR WITHDRAW《================================= //
    // Select Balance Current Total Amount
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);
    // Add Current Deposit and Update the Balance;
    balanceTotal.innerText = balanceTotalNumber - newWithdrawNumber;
})


// ▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ REFACTORING CODE ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓

