//Todo 测试await关键字


//用于存储从区块链中获得数据appleData，
/*
    区块链中appleInfo结构
    struct AppleInfo {
        
         address owner;
         uint appleId;
         string sourceArea;
         string pickingTime;
         Enterprise enterprise;
         
         uint deliverNums;
         mapping(uint => DeliverMessage) deliverMessage;
    }
*/
var appleData = new Object();

//用户存储从区块链中,appDB =[appleData1，appleData2，appleData3]
var appleDB = new Array();


//1.连接区块链节点 ， http://10.69.177.223:8545 为自己搭建的geth以太坊客户端
const web3 = new Web3(new Web3.providers.HttpProvider("http://10.69.177.223:8545"));

 var account ;
 //获取区块链结点上的第一个账户为交易账户
 web3.eth.personal.getAccounts(
  function(err,res){
          account = res[0];
});

//2.1 remix 编写好智能合约后，编译把合约 abi 拷贝过来
var contractAbi =  [{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getAppleDeliverMessage","outputs":[{"components":[{"name":"fromRegion","type":"string"},{"name":"toRegion","type":"string"},{"name":"date","type":"string"},{"name":"deliver","type":"string"},{"name":"telphone","type":"uint256"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"fromR","type":"string"},{"name":"toR","type":"string"},{"name":"dat","type":"string"},{"name":"del","type":"string"},{"name":"telphone","type":"uint256"}],"name":"insertApple_DeliverMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"mySourceArea","type":"string"},{"name":"enterpriseTelphone","type":"uint256"},{"name":"enterpriseAddress","type":"string"},{"name":"pickingTim","type":"string"}],"name":"insertApple_DB","outputs":[{"name":"appleId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"appleDatabase","outputs":[{"name":"owner","type":"address"},{"name":"appleId","type":"uint256"},{"name":"sourceArea","type":"string"},{"name":"pickingTime","type":"string"},{"components":[{"name":"telphone","type":"uint256"},{"name":"enterpAddress","type":"string"}],"name":"enterprise","type":"tuple"},{"name":"deliverNums","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
//若自己部署字节码，到区块链上需要contractByteCode 否则 忽略
//var contractByteCode = '608060405234801561001057600080fd5b506103af806100206000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634ed3885e1461005c578063954ab4b2146100c5578063a75f578614610155575b600080fd5b34801561006857600080fd5b506100c3600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506101e5565b005b3480156100d157600080fd5b506100da6101ff565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011a5780820151818401526020810190506100ff565b50505050905090810190601f1680156101475780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016157600080fd5b5061016a6102a1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101aa57808201518184015260208101905061018f565b50505050905090810190601f1680156101d75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b80600090805190602001906101fb9291906102de565b5050565b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102975780601f1061026c57610100808354040283529160200191610297565b820191906000526020600020905b81548152906001019060200180831161027a57829003601f168201915b5050505050905090565b60606040805190810160405280601081526020017f68656c6c6f20626c6f636b436861696e00000000000000000000000000000000815250905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061031f57805160ff191683800117855561034d565b8280016001018555821561034d579182015b8281111561034c578251825591602001919060010190610331565b5b50905061035a919061035e565b5090565b61038091905b8082111561037c576000816000905550600101610364565b5090565b905600a165627a7a72305820efd33c3124ada5a2de40286fb01be7ffb6501d7a7dc60cb4b87807cb26640e950029';
//2.2 remix 部署好智能合约后，编译把合约地址拷贝过来
var contractAddress = '0xFEb6e9804a36756200DFDBcBDF969FB1D18d34A8';

//通过abi和区块链上的合约地址，创建合约对象
var myContract = new web3.eth.Contract(contractAbi,contractAddress,{
    gasPrice: '20000000000', // default gas price in wei, 20 gwei in this case

    //如果数据上不了链，可以适当增大gas
    gas: 2000000
})


function insertApple_DB(id,mySourceArea,enterpriseTelphone,enterpriseAddress,pickingTim){

    myContract.methods.insertApple_DB(id,mySourceArea,enterpriseTelphone,enterpriseAddress,pickingTim).send(
        {
            from: account
        },
        function(error,result){
            if(error){
                console.log("error:"+error)
            } else {
                console.log("等待挖矿上链，本次交易hash为: "+result)
            }
        }
    )
    .on('receipt', function(receipt){
        console.log("苹果数据已经上链，交易详情："+ JSON.stringify(receipt)) 
     })
}


function insertApple_DeliverMessage(id,fromR,toR,dat,del,telphone){

    myContract.methods.insertApple_DeliverMessage(id,fromR,toR,dat,del,telphone).send(
        {
            from: account 
        },
        function(error,result){
            if(error){
                console.log("error:"+error)
            } else {
                console.log("递送信息等待校验中，交易hash为: "+result)
            }
        }
    )    
    .on('receipt', function(receipt){
        console.log("递送信息已经上链，递送详情："+ JSON.stringify(receipt)) 
     })

}

function appleDatabase(id){

    myContract.methods.appleDatabase(id).call({
        from: account },
        function(error,result){
        if(error){
            console.log("appleDatabase() error: "+error)
        } else {
            console.log("appleDatabase() success: "+JSON.stringify(result))
           appleData = result;
           console.log(appleData.appleId)
           appleDB[appleData.appleId] = appleData;
        }
    })
}

function getAppleDeliverMessage( id ) {

    myContract.methods.getAppleDeliverMessage(id).call({
        from: account},
        function(error,result){
        if(error){
            console.log("getAppleDeliverMessage() error: "+error)
        } else {
            console.log("getAppleDeliverMessage() success: "+JSON.stringify(result))
        }
    })
}

function readFromVariable(){
    console.log("appleData:"+JSON.stringify(appleData ));
    console.log("appleDB"+"["+appleData.appleId+"]:"+JSON.stringify(appleDB[appleData.appleId]))
}


