const httpProvider = 'https://ropsten.infura.io/v3/2ea352f51b5a45819be9923cdfb58894';

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(httpProvider));

const Tx = require('ethereumjs-tx');

const writeConfig = require('./writeConfig').writeConfig;

const fs = require('fs');
input = fs.readFileSync('betting.sol');

const solc = require('solc');
output = solc.compile(input.toString(), 1);

const bytecode = output.contracts[':Betting'].bytecode;
const abi = JSON.stringify(JSON.parse(output.contracts[':Betting'].interface));
console.log('bytecode: ', bytecode);
console.log('abi: ', abi);

const privateKey = '13B66C7C98144C3BBD50C4169F4A4032D0648C7AA250C2937EBB5E600D2F677B';

var wallet = web3.eth.accounts.privateKeyToAccount('0x' + privateKey);
web3.eth.getTransactionCount(wallet.address).then(nonce => {
    const rawTx = {
        nonce: web3.utils.toHex(nonce),
        gasPrice: web3.utils.toHex(web3.utils.toWei('40', 'gwei')),
        gasLimit: web3.utils.toHex(3000000),
        data: '0x' + bytecode
        // data: '0x6080604052600360015534801561001557600080fd5b5060008054600160a060020a03191633179055610d1b806100376000396000f3006080604052600436106100a35763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663256b049681146100a857806341c0e1b5146100ca5780636dc3971a146100df578063711168c01461010b5780638a1ce9081461012d5780638aecbc511461015c5780638da5cb5b14610164578063aa15efc814610186578063d400e72e146101a8578063f207564e146101bd575b600080fd5b3480156100b457600080fd5b506100c86100c3366004610a0b565b6101d0565b005b3480156100d657600080fd5b506100c861022e565b3480156100eb57600080fd5b506100f4610269565b604051610102929190610cab565b60405180910390f35b34801561011757600080fd5b506101206102f6565b6040516101029190610c9d565b34801561013957600080fd5b5061014d610148366004610a0b565b6102fc565b60405161010293929190610c34565b6100c8610337565b34801561017057600080fd5b50610179610339565b6040516101029190610c20565b34801561019257600080fd5b5061019b610348565b6040516101029190610c5c565b3480156101b457600080fd5b506101206103d2565b6100c86101cb366004610a0b565b6103d8565b600054600160a060020a031633146102065760405160e560020a62461bcd0281526004016101fd90610c7d565b60405180910390fd5b600254156102295760405160e560020a62461bcd0281526004016101fd90610c7d565b600155565b600054600160a060020a0316331461025b5760405160e560020a62461bcd0281526004016101fd90610c7d565b600054600160a060020a0316ff5b60006060600154600280805480602002602001604051908101604052809291908181526020016000905b828210156102e857600084815260209081902060408051606081018252600386029092018054600160a060020a0316835260018082015484860152600290910154918301919091529083529092019101610293565b505050509050915091509091565b30315b90565b600280548290811061030a57fe5b6000918252602090912060039091020180546001820154600290920154600160a060020a03909116925083565b565b600054600160a060020a031681565b60606005805480602002602001604051908101604052809291908181526020016000905b828210156103c9576000848152602090819020604080516080810182526004860290920180548352600180820154600160a060020a031684860152600282015492840192909252600301546060830152908352909201910161036c565b50505050905090565b60015481565b6000806103e36108cd565b6103ec336105f7565b151561040d5760405160e560020a62461bcd0281526004016101fd90610c6d565b60009250600091505b60025482101561047b578360028381548110151561043057fe5b906000526020600020906003020160010154141561047057600280548390811061045657fe5b906000526020600020906003020160020154600202830192505b600190910190610416565b600234028301303110156104a45760405160e560020a62461bcd0281526004016101fd90610c8d565b50604080516060810182523380825260208083018781523484860181815260028054600181810183556000838152895160039093027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace81018054600160a060020a0395861673ffffffffffffffffffffffffffffffffffffffff199182161790915588517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf83015586517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad09092019190915589825260049098528a902089518154931692909716919091178655935193850193909355519290910191909155925191927f1dbeb35b52e738bc79b20b0bbae279f8a841c30afc7839d15dfb22262781c8cc926105d592918891610c34565b60405180910390a160015460025414156105f1576105f161065a565b50505050565b6000805b60025481101561064f5782600160a060020a031660028281548110151561061e57fe5b6000918252602090912060039091020154600160a060020a031614156106475760009150610654565b6001016105fb565b600191505b50919050565b6000806106656108f8565b60015460408051428152905190819003602001902081151561068357fe5b066001019250600091505b6002548210156108bd57826002838154811015156106a857fe5b90600052602060002090600302016001015414156108b25760028054839081106106ce57fe5b600091825260209091206003909102015460028054600160a060020a03909216916108fc9190859081106106fe57fe5b9060005260206000209060030201600201546002029081150290604051600060405180830381858888f1935050505015801561073e573d6000803e3d6000fd5b5060806040519081016040528042815260200160028481548110151561076057fe5b600091825260209182902060039091020154600160a060020a031682526002805492909101918590811061079057fe5b90600052602060002090600302016001015481526020016002848154811015156107b657fe5b600091825260208083206003929092029091016002908101540290925260058054600181018255915282517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0600490920291820155908201517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db18201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0390921691909117905560408201517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db282015560608201517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db39091015590505b60019091019061068e565b600380546105f19160029161092a565b6060604051908101604052806000600160a060020a0316815260200160008152602001600081525090565b608060405190810160405280600081526020016000600160a060020a0316815260200160008152602001600081525090565b8280548282559060005260206000209060030281019282156109a95760005260206000209160030282015b828111156109a9578254825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255600180840154908301556002808401549083015560039283019290910190610955565b506109b59291506109b9565b5090565b6102f991905b808211156109b557805473ffffffffffffffffffffffffffffffffffffffff1916815560006001820181905560028201556003016109bf565b6000610a0482356102f9565b9392505050565b600060208284031215610a1d57600080fd5b6000610a2984846109f8565b949350505050565b610a3a81610cd5565b82525050565b6000610a4b82610cd1565b808452602084019350610a5d83610ccb565b60005b82811015610a8d57610a73868351610b9a565b610a7c82610ccb565b608096909601959150600101610a60565b5093949350505050565b6000610aa282610cd1565b808452602084019350610ab483610ccb565b60005b82811015610a8d57610aca868351610be4565b610ad382610ccb565b606096909601959150600101610ab7565b600e81527f42616e2064612064616e67206b69000000000000000000000000000000000000602082015260400190565b601281527f42616e206b686f6e6720636f20717579656e0000000000000000000000000000602082015260400190565b602b81527f436f6e7472616374206b686f6e67206475207469656e20646520747261206e6560208201527f752062616e207472756e67000000000000000000000000000000000000000000604082015260600190565b80516080830190610bab8482610c17565b506020820151610bbe6020850182610a31565b506040820151610bd16040850182610c17565b5060608201516105f16060850182610c17565b80516060830190610bf58482610a31565b506020820151610c086020850182610c17565b5060408201516105f160408501825b610a3a816102f9565b60208101610c2e8284610a31565b92915050565b60608101610c428286610a31565b610c4f6020830185610c17565b610a296040830184610c17565b60208082528101610a048184610a40565b60208082528101610c2e81610ae4565b60208082528101610c2e81610b14565b60208082528101610c2e81610b44565b60208101610c2e8284610c17565b60408101610cb98285610c17565b8181036020830152610a298184610a97565b60200190565b5190565b600160a060020a0316905600a265627a7a723058205966f477cbbe2ce9e83422016f0092f2bc7300cd93416015c656dcf428ebceac6c6578706572696d656e74616cf50037'
    };
    const tx = new Tx(rawTx);

    tx.sign(Buffer.from(privateKey, 'hex'));
    const raw = '0x' + tx.serialize().toString('hex');
    web3.eth.sendSignedTransaction(raw).then(resp => {
        console.log('resp: ', resp);
        writeConfig(httpProvider, resp.contractAddress, abi);
    });

}).catch(error => {
    console.log(error.message)
});