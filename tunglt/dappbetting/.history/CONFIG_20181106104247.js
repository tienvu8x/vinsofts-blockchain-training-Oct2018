const contractAdress = '0x972a270066d5d863b6a60c1a5ec1c9d7d746b33b'
const contractData = '0x608060405260008055600260015534801561001957600080fd5b506106f5806100296000396000f3006080604052600436106100565763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166349176c06811461005b578063aa8c217c14610082578063b4ce2f5314610097575b600080fd5b34801561006757600080fd5b506100706100a4565b60408051918252519081900360200190f35b34801561008e57600080fd5b506100706100ab565b6100a26004356100b1565b005b6002545b90565b60005481565b3360009081526006602052604081205481908190151561018f5760408051808201825260008082523360208084018281526002805460018101808355828752965191027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace81019190915590517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf909101805473ffffffffffffffffffffffffffffffffffffffff9290921673ffffffffffffffffffffffffffffffffffffffff19909216919091179055908252600690529190912060ff8216905592505b506001905060005b60035460ff821610156101ed576003805433919060ff84169081106101b857fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614156101e557600091505b600101610197565b60018215151461028457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f567569206cc3b26e6720c491e1bba36920c491e1babf6e206b6869207472616f60448201527f207468c6b0e1bb9f6e6700000000000000000000000000000000000000000000606482015290519081900360840190fd5b60408051602081019091523381526003805460018101825560009190915290517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b909101805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff909216919091179055670de0b6b3a764000034101561037657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f54e1bb916920746869e1bb837520312065746865720000000000000000000000604482015290519081900360640190fd5b60008054340181558481526007602090815260408220805460018181018355918452918320909101805473ffffffffffffffffffffffffffffffffffffffff19163317905560058054808301825592527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0909101859055546003548115156103fa57fe5b0615156104095761040961040f565b50505050565b6001600081815260076020527fb39221ace053465ec3453ce2b36430bd138b997ecea25c1043da0c366812b82880549091908190819081908110156105b557845460005481151561045c57fe5b049350600092505b845460ff8416101561053a57600091505b60025460ff8316101561052f57848360ff1681548110151561049357fe5b6000918252602090912001546002805473ffffffffffffffffffffffffffffffffffffffff9092169160ff85169081106104c957fe5b600091825260209091206001600290920201015473ffffffffffffffffffffffffffffffffffffffff161415610524578360028360ff1681548110151561050c57fe5b60009182526020909120600290910201805490910190555b600190910190610475565b600190920191610464565b5060005b60055460ff8216101561058e576007600060058360ff1681548110151561056157fe5b90600052602060002001548152602001908152602001600020600061058691906105db565b60010161053e565b600080805561059f906005906105db565b600480546105af916003916105fc565b506105d3565b6105c1600560006105db565b600480546105d1916003916105fc565b505b505050505050565b50805460008255906000526020600020908101906105f9919061067e565b50565b82805482825590600052602060002090810192821561066e5760005260206000209182015b8281111561066e578254825473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff90911617825560019283019290910190610621565b5061067a929150610698565b5090565b6100a891905b8082111561067a5760008155600101610684565b6100a891905b8082111561067a57805473ffffffffffffffffffffffffffffffffffffffff1916815560010161069e5600a165627a7a72305820091cb216d9ebf400c0857287c9d2d6e430488c68f22d3d267e42699d5aa5dda30029'
const abi            = [
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
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "customers",
		"outputs": [
			{
				"name": "price",
				"type": "uint256"
			},
			{
				"name": "owner",
				"type": "address"
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