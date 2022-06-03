let confirmButton = document.getElementById("confirm-button");

confirmButton.addEventListener("click", () => {
    const billAmount = document.getElementById("bill-amount-input").value;
    const tipRate = document.getElementById("tip-rate-input").value;

    const tip = billAmount * (tipRate / 100);
    const total = (parseFloat(billAmount) + parseFloat(tip));

    document.getElementById("tip-result").innerHTML = "Tip: $" + tip;
    document.getElementById("total-result").innerHTML = "Total: $" + total;
});

