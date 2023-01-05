// handle deposite button event
document.getElementById('deposit-button').addEventListener('click',function(){
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value ;
    const newDepositAmount = parseFloat( newDepositAmountText);


    //update deposite total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;


    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmountText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountText);

    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear the deposit input field
    depositInput.value ='';
});

// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click',function(){
    //get the amount withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value ;
    const newWithdrawAmount = parseFloat( newWithdrawAmountText);

    
    //update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmountText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;


    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmountText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountText);

    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear the deposit input field
    withdrawInput.value ='';
});