const httpProvider = "https://ropsten.infura.io/v3/2ea352f51b5a45819be9923cdfb58894";

const addressContract = "0x8637efd74C93d8476DD6834C2125125b648C9A98";

const abiContract = [{
    "constant": false,
    "inputs": [{
        "name": "_numbeOwner",
        "type": "uint256"
    }],
    "name": "changeNumberOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "kill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getInfoBetting",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }, {
        "components": [{
            "name": "id",
            "type": "address"
        }, {
            "name": "number",
            "type": "uint256"
        }, {
            "name": "money",
            "type": "uint256"
        }],
        "name": "",
        "type": "tuple[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getMoneyContract",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "uint256"
    }],
    "name": "Owners",
    "outputs": [{
        "name": "id",
        "type": "address"
    }, {
        "name": "number",
        "type": "uint256"
    }, {
        "name": "money",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "sendMoneyToContract",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getHistory",
    "outputs": [{
        "components": [{
            "name": "time",
            "type": "uint256"
        }, {
            "name": "id",
            "type": "address"
        }, {
            "name": "number",
            "type": "uint256"
        }, {
            "name": "addmoney",
            "type": "uint256"
        }],
        "name": "",
        "type": "tuple[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "numberOwner",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_number",
        "type": "uint256"
    }],
    "name": "register",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "_owner",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_number",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "_ether",
        "type": "uint256"
    }],
    "name": "registered",
    "type": "event"
}];

module.exports = {
    httpProvider,
    addressContract,
    abiContract
}