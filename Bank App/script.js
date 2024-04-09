function deposit(account) {
    const depositAmount = parseFloat(document.getElementById(account + "Deposit").value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Please enter a valid deposit amount.");
        return;
    }

    const balanceElement = document.getElementById(account + "Balance");
    const currentBalance = parseFloat(balanceElement.innerText.substring(1)); // Remove '$' sign
    const newBalance = currentBalance + depositAmount;
    balanceElement.innerText = "$" + newBalance.toFixed(2);
}

function withdraw(account) {
    const withdrawAmount = parseFloat(document.getElementById(account + "Withdraw").value);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Please enter a valid withdrawal amount.");
        return;
    }

    const balanceElement = document.getElementById(account + "Balance");
    const currentBalance = parseFloat(balanceElement.innerText.substring(1)); // Remove '$' sign
    if (withdrawAmount > currentBalance) {
        alert("Insufficient funds");
        return;
    }

    const newBalance = currentBalance - withdrawAmount;
    balanceElement.innerText = "$" + newBalance.toFixed(2);
}