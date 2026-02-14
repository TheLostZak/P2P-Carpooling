// Get balance
App.account.getBalance(hashcode).then(function(rvalue) {
    const etherValue = ethers.utils.formatEther(rvalue);
    document.getElementById("balance").innerHTML = etherValue + " ETH";
});
