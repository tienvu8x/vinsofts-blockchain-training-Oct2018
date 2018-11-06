const contractAdress = '0x68f0d27507a4a9f3cc1efbbc5b3505302a2e7af6'
const contractData = '0x6080604052600080556002600155600060025534801561001e57600080fd5b50610a678061002e6000396000f30060806040526004361061008d5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630c40d8ec81146100925780630e35ac15146100bd57806349176c06146100ea578063701e5d75146100ff5780638c67f5df1461011f578063aa8c217c14610134578063b4ce2f5314610149578063c8691b2a1461015e575b600080fd5b34801561009e57600080fd5b506100a761018b565b6040516100b49190610a09565b60405180910390f35b3480156100c957600080fd5b506100dd6100d8366004610895565b610191565b6040516100b491906109c4565b3480156100f657600080fd5b506100a76101c8565b34801561010b57600080fd5b506100dd61011a366004610895565b6101cf565b34801561012b57600080fd5b506100a76101ea565b34801561014057600080fd5b506100a76101f0565b61015c61015736600461086f565b6101f6565b005b34801561016a57600080fd5b5061017e61017936600461086f565b6104e1565b6040516100b491906109d8565b60025481565b600a602052816000526040600020818154811015156101ac57fe5b600091825260209091200154600160a060020a03169150829050565b6006545b90565b6008602052816000526040600020818154811015156101ac57fe5b60015481565b60005481565b336000908152600760205260408120548190819015156102b9576040805180820182526000808252336020808401828152600380546001810180835591865295517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b60029097029687015590517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c9095018054600160a060020a031916600160a060020a0390961695909517909455908252600790529190912060ff8216905592505b506001905060005b60045460ff8216101561030f576004805433919060ff84169081106102e257fe5b6000918252602090912060039091020154600160a060020a0316141561030757600091505b6001016102c1565b600182151514610354576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034b906109f9565b60405180910390fd5b6040805160608101825233815260208101868152429282019283526004805460018101825560009190915291517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b60039093029283018054600160a060020a031916600160a060020a03909216919091179055517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19c82015590517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19d90910155670de0b6b3a7640000341015610455576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034b906109e9565b600080543401815584815260086020908152604082208054600181810183559184529183209091018054600160a060020a0319163317905560068054808301825592527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f909101859055546004548115156104cc57fe5b0615156104db576104db61054d565b50505050565b6000818152600a602090815260409182902080548351818402810184019094528084526060939283018282801561054157602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610523575b50505050509050919050565b6001600081815260086020527fad67d757c34507f157cacfa2e3153e9f260a2244f30428821be7be64587ac55f80549091908190819081101561068f57835460005481151561059857fe5b049250600091505b835460ff83161015610614576002546000908152600a602052604090208454859060ff85169081106105ce57fe5b600091825260208083209091015483546001818101865594845291909220018054600160a060020a031916600160a060020a0390921691909117905591909101906105a0565b5060005b60065460ff82161015610668576008600060068360ff1681548110151561063b57fe5b90600052602060002001548152602001908152602001600020600061066091906106e8565b600101610618565b6000808055610679906006906106e8565b6005805461068991600491610709565b506106d8565b60408051600080825260208083018085526002548352600a90915292902090516106b9929061078b565b506106c6600660006106e8565b600580546106d691600491610709565b505b5050600280546001019055505050565b508054600082559060005260206000209081019061070691906107ec565b50565b82805482825590600052602060002090600302810192821561077b5760005260206000209160030282015b8281111561077b5782548254600160a060020a031916600160a060020a03909116178255600180840154908301556002808401549083015560039283019290910190610734565b50610787929150610806565b5090565b8280548282559060005260206000209081019282156107e0579160200282015b828111156107e05782518254600160a060020a031916600160a060020a039091161782556020909201916001909101906107ab565b50610787929150610838565b6101cc91905b8082111561078757600081556001016107f2565b6101cc91905b80821115610787578054600160a060020a0319168155600060018201819055600282015560030161080c565b6101cc91905b80821115610787578054600160a060020a031916815560010161083e565b600061086882356101cc565b9392505050565b60006020828403121561088157600080fd5b600061088d848461085c565b949350505050565b600080604083850312156108a857600080fd5b60006108b4858561085c565b92505060206108c58582860161085c565b9150509250929050565b6108d881610a21565b82525050565b60006108e982610a1d565b8084526020840193506108fb83610a17565b60005b8281101561092b576109118683516108cf565b61091a82610a17565b6020969096019591506001016108fe565b5093949350505050565b601581527f54e1bb916920746869e1bb837520312065746865720000000000000000000000602082015260400190565b602a81527f567569206cc3b26e6720c491e1bba36920c491e1babf6e206b6869207472616f60208201527f207468c6b0e1bb9f6e6700000000000000000000000000000000000000000000604082015260600190565b6108d8816101cc565b602081016109d282846108cf565b92915050565b6020808252810161086881846108de565b602080825281016109d281610935565b602080825281016109d281610965565b602081016109d282846109bb565b60200190565b5190565b600160a060020a0316905600a265627a7a723058204f13cf61c7323b449280f3b2865d50dcadeb5f67b2510ac46a79e8ce6424f92a6c6578706572696d656e74616cf50037'
const abi =

[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_number",
				"type": "uint256"
			}
		],
		"name": "ChonSo",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "amount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCacuoc",
		"outputs": [
			{
				"components": [
					{
						"name": "owner",
						"type": "address"
					},
					{
						"name": "number",
						"type": "uint256"
					},
					{
						"name": "time",
						"type": "uint256"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_traothuonglanthumay",
				"type": "uint256"
			}
		],
		"name": "getHistory",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLenthCustomers",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "numberToOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "numberToOwnerLS",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "soNguoiSeQuayThuong",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "sovongdatraothuong",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]


module.exports = {
	contractAdress: contractAdress,
	abi: abi,
	data: contractData,
};