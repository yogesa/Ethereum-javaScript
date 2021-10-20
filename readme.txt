1.使用本项目可以选择先搭建一个以太坊私有链，可安装geth Client，因为web3对象需要选择 http://10.69.177.223:8545 rpc远程调用区块链进行操作
2.使用remix在线编译器，将编写好的智能合约(*.sol)文件编译，并将编译生成abi拷贝过来，赋值给 contractAbi ，并将合约部署到区块链上，然后将合约地址拿过来赋值给contractAddress
3.确保所连接的以太坊结点的第一个account账户，在geth行下已经使用web3.persol.unlockAccount(eth.accounts[0],'123',0) 对第0个账户使用密码为‘123’，下次解锁时间为0s（在geth运行期间，永久解决）后进行解锁
4.确保eth.accounts[0] , 具有私链上的以太币
