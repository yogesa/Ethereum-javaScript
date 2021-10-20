//该文档仅用用于开发时，测试代码的学习，与本项目无关
var web3 = new Web3(new Web3.providers.HttpProvider("http://115.29.67.40:8545"));

console.log(web3)

var abi =[
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getAppleInfo",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
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
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getAppleDeliverMessage",
		"outputs": [
			{
				"components": [
					{
						"name": "fromRegion",
						"type": "string"
					},
					{
						"name": "toRegion",
						"type": "string"
					},
					{
						"name": "date",
						"type": "string"
					},
					{
						"name": "deliver",
						"type": "string"
					},
					{
						"name": "telphone",
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
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "fromR",
				"type": "string"
			},
			{
				"name": "toR",
				"type": "string"
			},
			{
				"name": "dat",
				"type": "string"
			},
			{
				"name": "del",
				"type": "string"
			},
			{
				"name": "telphone",
				"type": "uint256"
			}
		],
		"name": "insertApple_DeliverMessage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"name": "str",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "mySourceArea",
				"type": "string"
			},
			{
				"name": "enterpriseTelphone",
				"type": "uint256"
			},
			{
				"name": "enterpriseAddress",
				"type": "string"
			},
			{
				"name": "pickingTim",
				"type": "string"
			}
		],
		"name": "insertApple_DB",
		"outputs": [
			{
				"name": "appleId",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
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
		"name": "appleDatabase",
		"outputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "appleId",
				"type": "uint256"
			},
			{
				"name": "sourceArea",
				"type": "string"
			},
			{
				"name": "pickingTime",
				"type": "string"
			},
			{
				"components": [
					{
						"name": "telphone",
						"type": "uint256"
					},
					{
						"name": "enterpAddress",
						"type": "string"
					}
				],
				"name": "enterprise",
				"type": "tuple"
			},
			{
				"name": "deliverNums",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

console.log("测试：")
web3.eth.personal.getAccounts()
.then(console.log);

var address = "0x20C8308027C89D93f4a1EF4E4B9b093D5000f2a7";
var account0 = "0xe81a906638517758e75dae71c91d0172b4436bbb";
//contractAddress :  '0x0fB873C1853bdC7de23ADAca3B7235f72E68f2E6'

// var appleContract = new web3.eth.Contract(abi, '0x0fB873C1853bdC7de23ADAca3B7235f72E68f2E6', {
//     from: "0xe81a906638517758e75dae71c91d0172b4436bbb", // default from address
//     gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
// });

var appleContract = new web3.eth.Contract(abi, address,{from:account0 , gasPrice:'20000000'});
appleContract.defaultAccount = account0;

//console.log(appleContract.defaultAccount)

// appleContract.methods.get().call({from:account0},function(error,result){
// 	if(error){
// 		console.log(error)
// 	}else{
// 		console.log(result)
// 	}
// });
function insertData(){

	//console.log(web3.personal.unlockAccount(account0,'123').toString)

	// web3.personal.unlockAccount(account0,'123',(err,res)=>{
	// 	if(err) {
	// 		console.log("Error:"+err)
	// 	}else {
	// 		console.log("Result:"+res)
	// 	}
	// }).then(
		web3.eth.personal.unlockAccount(account0,'123').then(
			console.log("Account unlocked")
		)
		web3.eth.personal.getAccounts()
		.then(console.log);
		// appleContract.methods.insertApple_DB(
		// 	20210927,
		// 	"陕西洛川",
		// 	13137207371,
		// 	"陕西洛川苹果有限公司",
		// 	"20210927 10:35:00"	
		// ).send({from:account0,to:address,gasPrice:400000})
		// .then(function(receipt){
		// 	if(error){
		// 		console.log("Error:"+receipt)
		// 	}else {
		// 		console.log(receipt)
		// 	}
		// })
	//)
	
}
function getData(){
	var x = appleContract.methods.getAppleInfo(123).send({from:account0,to:address,gasPrice:400000})
	.then(function(error,result){
		if(error){
			console.log("Error:"+error)
		}else {
			console.log("Result:"+result)
		}
	}).toString();

	console.log("x:"+x)
	document.getElementById("show").innerHTML = appleContract.methods.getAppleInfo(123).send({from:account0})
	.then(console.log);
}


//var a = web3.eth.getAccounts(console.log)

//web3.eth.defaultAccount = "0xe81a906638517758e75dae71c91d0172b4436bbb"

// console.log(web3.eth.defaultAccount)

// web3.eth.defaultBlock = 108;
// console.log(web3.eth.defaultBlock)

// web3.eth.getCoinbase()
// .then(console.log);
// web3.eth.isMining(console.log)

// web3.eth.getAccounts(console.log)

// web3.eth.getBlockNumber(console.log)
// web3.eth.getBlockNumber().then(console.log)
//获得账户 accounts0 的金额
// web3.eth.getBalance(account0).then(console.log)

// web3.eth.getStorageAt(account0, 0)
// .then(console.log);

// web3.eth.getBlock(108).then(console.log)

// let id ;
// applecontract.methods.insertApple_DB(
//     20210925,"陕西洛川",
//     13032209871,
//     "洛川西路505号",
//     20210925).
//     send({from:account0,gas:200000})
//     .then(console.log);

//console.log(applecontract)

// var appleObject = applecontract.options;
// console.log(appleObject)

// var web3Version = web3.version;

// console.log(web3Version);
// console.log(web3.modules);
// console.log(web3.providers)

// console.log(web3.givenProvider)

// //web3.eth.getAccounts(console.log)

// console.log(web3.currentProvider.connected)
// web3.eth.defaultAccount = account0;
// console.log(web3.eth.defaultAccount)


// //web3.eth.getProtocolVersion(console.log) 打印不出

// //web3.eth.isSyncing().then(console.log);

// web3.eth.getCoinbase().then(console.log);

// web3.eth.isMining().then(console.log);


// web3.eth.getHashrate().then(console.log);

// web3.eth.getGasPrice().then(console.log);

// web3.eth.getAccounts().then((error,result)=>{
//     if(!error) {
//         console.log(result)
//     }
// })


// //web3.eth.getBlockNumber().then(console.log);

// web3.eth.getBlockNumber().then((error,result)=>{
//     if(!error) {
//         console.log("blockNumber:"+result)
//     }
// else
//     console.log("error")});


//js 中包括连接区块链网络的测试

const web3 = new Web3(new Web3.providers.HttpProvider("http://10.69.177.223:8545"));
console.log(web3.version)

//运行不了
//web3.eth.getProtocolVersion().then(console.log)
//web3.eth.isSyncing().then(console.log)


//获得连接的结点的账户
web3.eth.getAccounts((err,res)=>{
    if (err) {
        console.log("error: 0"+err)
    }else {
        console.log("getAccountsRes:"+res)
		console.log("connect:"+web3.currentProvider.connected)
    }
})

web3.eth.getCoinbase(function(err,res){console.log("getCoinbaseerror: "+err);console.log("getCoinbaseresult: "+res)})
web3.eth.getAccounts().then(console.log);
web3.eth.getBlockNumber().then(console.log);
web3.eth.getBlock(3).then(console.log)
web3.eth.getBlockTransactionCount(3).then(console.log)
web3.eth.getWork().then(console.log);

//得不到solidity
// var source = "" +
//     "contract test {\n" +
//     "   function multiply(uint a) returns(uint d) {\n" +
//     "       return a * 7;\n" +
//     "   }\n" +
//     "}\n";
// 	web3.eth.compile.solidity(source)
// .then(console.log);



//获取不到编译器
//web3.eth.getCompilers().then(console.log);

//学了智能合约，并且存储数据后，再尝试
//web3.eth.getStorageAt(address, position [, defaultBlock] [, callback])
//web3.eth.getCode(address [, defaultBlock] [, callback])

//web3.BatchRequest() 批量请求
// var batch = new web3.BatchRequest();
// batch.add(web3.eth.getBalance.request('0x25373441ad8a8787aa883083b94437c6a6745d5f','latest',function(error,result){
// 	if (error) {
// 		console.log("error:"+error)
// 	} else {
// 		console.log("result: " + result)
// 	}
// }))
// batch.execute();


//web3.eth.Contract('合约编译之后生成的合约application binary interface(ABI)','部署在区块链网络中的地址')
// var sayContract = new web3.eth.Contract(sayAbi,'0x21A79073D43DA865dBf631dC02d64f3dbeaeA61E',{
//     from: '0x22af6e953a87ded848e365f75085fcaf238a0165', // default from address
//     gasPrice: '20000000000' ,// default gas price in wei, 20 gwei in this case
//     gas: 100000
// });

//  sayContract.methods.Helloworld().call({from:'0x22af6e953a87ded848e365f75085fcaf238a0165'},(error,result)=>{
//     if(error) {
//         console.log("error: " + error)
//     } else {
//         console.log("result: "+ result)
//     }
// });

// sayContract.methods.set("nihao").send({from:'0x22af6e953a87ded848e365f75085fcaf238a0165'},
// (error,result)=>{
//     if(error) {
//         console.log("error: " + error)
//     } else {
//         console.log("set: "+ result)
//     }
// }).then(
//     sayContract.methods.say().call({from:'0x22af6e953a87ded848e365f75085fcaf238a0165'},(error,result)=>{
//         if(error) {
//             console.log("error: " + error)
//         } else {
//             console.log("say: "+ result)
//         }
//     })
// )

// sayContract.methods.set("hello chenhui").send({from:'0x22af6e953a87ded848e365f75085fcaf238a0165'})
// .on('transactionHash',function(hash){
//     console.log("hash: "+hash)
// })
// .on('receipt',function(receipt){
//     console.log("receipt: "+ receipt)
// })
// .on('confirmation',function(confirmationNumber,receipt){
//     console.log("confirmationNumber: "+confirmationNumber)
//     console.log("recept:"+ receipt)

//     sayContract.methods.say().call({from:'0x22af6e953a87ded848e365f75085fcaf238a0165'},(error,result)=>{
//         if(error) {
//             console.log("error: " + error)
//         } else {
//             console.log("say: "+ result)
//         }
//     })
// })
// .on('error',console.error)

//2.1 若已经部署，则使用已经部署好的合约，否则重新部署

// if ( localStorage.getItem("myContractAddress") != null) {

//     document.getElementById("showaddress").innerHTML = localStorage.getItem("myContractAddress");
    
//     web3.eth.getAccounts((res,account)=>{
// 		console.log(account[1])
// 		localStorage.setItem("account[0]",account[0] );
// 	}).then(function(value){
// 		document.getElementById("showUser").innerHTML = value[1];
// 	})
// } else {
//    deployContract(contractAbi,contractByteCode);
// }

//3.通过界面与区块链上的智能合约交互

// function deployContract(contractAbi,contractByteCode){

//     var myContract = new web3.eth.Contract(contractAbi);

// 	web3.eth.personal.unlockAccount('0x2e6a4aa3b685a4bda5598c9f1a4b6a9be6b9fcca','123').then(
// 		myContract.deploy({
// 			//data 为 say.sol 编译的得到的 byteCode
// 			data:contractByteCode 
// 		}).send({
// 			from:'0x2e6a4aa3b685a4bda5598c9f1a4b6a9be6b9fcca',
// 			gas: 1000000,
// 			gasPrice:'20000000000'
// 		},function(error,transaction){
// 			if (error) {
// 				console.log("error:"+error)
// 			} else {
// 				console.log("transaction:",transaction)
// 			}
// 		})
// 		.on('error', function(error){ 
// 			console.log(error) })
// 		.on('transactionHash', function(transactionHash){
// 			 console.log(transactionHash) })
// 		.on('receipt', function(receipt){
// 		   console.log(receipt.contractAddress) // 收据中包含了新的合约地址
// 		})
// 		.on('confirmation', function(confirmationNumber, receipt){
// 			//只有被挖矿了才会有输出
// 			 console.log(confirmationNumber +"--"+receipt) })
// 		.then(function(newContractInstance){
// 			//只有被挖矿了才会有输出
// 			 addre = newContractInstance.options.address// 新地址的合约实例
// 			 document.getElementById('showaddress').innerHTML = addre
	

// 		})
// 	)
// }

const web3 = new Web3(new Web3.providers.HttpProvider("http://10.69.177.223:8545"));
//abi 为 say.sol 的编译生成的文件
var abi = [{"constant":false,"inputs":[{"name":"_msg","type":"string"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"say","outputs":[{"name":"key","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"Helloworld","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}];

//初始化
var myAccount;

function init(){
	console.log(web3.eth.getAccounts((res,account)=>{
		console.log(account[0])
		localStorage.setItem("account[0]",account[0] );
		myAccount = account[0];
	}))
}

function DeployContract(){

	var addre;
	var myContract1 = new web3.eth.Contract(abi);

	web3.eth.personal.unlockAccount('0x2e6a4aa3b685a4bda5598c9f1a4b6a9be6b9fcca','123').then(
		myContract1.deploy({
			//data 为 say.sol 编译的得到的 byteCode
			data:'608060405234801561001057600080fd5b506103af806100206000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634ed3885e1461005c578063954ab4b2146100c5578063a75f578614610155575b600080fd5b34801561006857600080fd5b506100c3600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506101e5565b005b3480156100d157600080fd5b506100da6101ff565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011a5780820151818401526020810190506100ff565b50505050905090810190601f1680156101475780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016157600080fd5b5061016a6102a1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101aa57808201518184015260208101905061018f565b50505050905090810190601f1680156101d75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b80600090805190602001906101fb9291906102de565b5050565b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102975780601f1061026c57610100808354040283529160200191610297565b820191906000526020600020905b81548152906001019060200180831161027a57829003601f168201915b5050505050905090565b60606040805190810160405280601081526020017f68656c6c6f20626c6f636b436861696e00000000000000000000000000000000815250905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061031f57805160ff191683800117855561034d565b8280016001018555821561034d579182015b8281111561034c578251825591602001919060010190610331565b5b50905061035a919061035e565b5090565b61038091905b8082111561037c576000816000905550600101610364565b5090565b905600a165627a7a72305820efd33c3124ada5a2de40286fb01be7ffb6501d7a7dc60cb4b87807cb26640e950029'
		}).send({
			from:'0x2e6a4aa3b685a4bda5598c9f1a4b6a9be6b9fcca',
			gas: 1000000,
			gasPrice:'20000000000'
		},function(error,transaction){
			if (error) {
				console.log("error:"+error)
			} else {
				console.log("transaction:",transaction)
			}
		})
		.on('error', function(error){ 
			console.log(error) })
		.on('transactionHash', function(transactionHash){
			 console.log(transactionHash) })
		.on('receipt', function(receipt){
		   console.log(receipt.contractAddress) // 收据中包含了新的合约地址
		})
		.on('confirmation', function(confirmationNumber, receipt){
			//只有被挖矿了才会有输出
			 console.log(confirmationNumber +"--"+receipt) })
		.then(function(newContractInstance){
			//只有被挖矿了才会有输出
			 addre = newContractInstance.options.address// 新地址的合约实例
			 document.getElementById('showaddress').innerHTML = addre
	
			 var myContract = new web3.eth.Contract(abi,addre,{
				from: '0x2e6a4aa3b685a4bda5598c9f1a4b6a9be6b9fcca', // default from address
				gasPrice: '20000000000', // default gas price in wei, 20 gwei in this case
				gas: 1000000
			})
	
			
			myContract.methods.Helloworld().call({
				from:'0x2e6a4aa3b685a4bda5598c9f1a4b6a9be6b9fcca'},
				function(error,result){
				if(error){
					console.log("Helloworld() error:"+error)
				} else {
					console.log("Helloworld() success:"+result)
				}
			})
				
	
			myContract.methods.set("nihaochihui").send(
				{
					from:'0x2e6a4aa3b685a4bda5598c9f1a4b6a9be6b9fcca'},
					function(error,result){
					if(error){
						console.log("set:"+error)
					} else {
						console.log("set:"+result)
					}
				}
			).then(
				myContract.methods.say().call(
				).then(console.log)
			)
		})
	)

}

function Say() {
		myContract.methods.set("nihaochihui").send(
		{
			from:'0x2e6a4aa3b685a4bda5598c9f1a4b6a9be6b9fcca'},
			function(error,result){
			if(error){
				console.log("set error:"+error)
			} else {
				console.log("set success:"+result)
			}
		}
	)
}

function test(){

	//获取节点上的账户地址，并通过数组获取
	web3.eth.getAccounts((res,account)=>{
		console.log(account[0])
		localStorage.setItem("account[0]",account[0] );
	}).then(function(value){
		console.log("value:"+value[0])
		return value[1];
	}).then(function(abc){
		console.log(abc)
	})
}

function acquire(){
	
	console.log("Storage:"+localStorage.getItem("account[0]"))
	
	console.log(myAccount)
}

// web3.eth.sendTransaction({
//     from: '0x2e6a4aa3b685a4bda5598c9f1a4b6a9be6b9fcca',
//     to: '0x92e342c281831fdae01aa08eda49856A442a726B',
//     value: '1000000000000000'
// })
// .then(function(receipt){
//     console.log(receipt)
// });




// myContract.methods.say().call(    {
//     from:'0x2e6a4aa3b685a4bda5598c9f1a4b6a9be6b9fcca'},
//     function(error,result){
//     if(error){
//         console.log("say error:"+error)
//     } else {
//         console.log("say success:"+result)
//     }
// })