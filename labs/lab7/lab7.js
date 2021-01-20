"use strict";
let accountInfoList = []

let createAccount = function () {

    var accountName =  document.getElementById("account-name").value;
    var balance = document.getElementById("deposit").value;
    document.getElementById("account-name").value = "";
    document.getElementById("deposit").value = "";
    return {
         getAccountName : function () { return accountName },
         getBalance : function () { return balance }
    }
    
}

window.onload = function () {
    let btn = document.getElementById("create");
    btn.onclick = onclickhandler;
}

function onclickhandler() {
    let newAccount = createAccount();
    accountInfoList.push(newAccount);
    updateAccountList();

} 
function updateAccountList() {
    let txtArea = document.getElementById("accounts");
    let accounts = "";
    for (let item of accountInfoList) {
        accounts += `Account name: ${item.getAccountName()} Balance: ${item.getBalance()}\n`
    }
    txtArea.value = accounts
}