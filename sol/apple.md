```js
/*
* author:ch
* version: v1.0
* date: 2021-09-20
* updateDate:
*/

pragma solidity ^0.4.3;
pragma experimental ABIEncoderV2;

contract Apple {
    /*
      mapping 在合约中充当数据库的角色，使用 appleDatabase 作为存储数据的数据库
    */
    mapping (uint => AppleInfo ) public appleDatabase;
    
    //using AppleInfo struct to storage apple information on blokChain.
    struct AppleInfo {
        
         address owner;
         uint appleId;
         string sourceArea;
         string pickingTime;
         Enterprise enterprise;
         
         uint deliverNums;
         mapping(uint => DeliverMessage) deliverMessage;
    }

    struct Enterprise {
        uint telphone;
        string enterpAddress;
    }
    
    struct DeliverMessage {
        string fromRegion;
        string toRegion;
        string date;
        string deliver;
        uint telphone;
    }
    
    function insertApple_DB(
        uint id, 
        string mySourceArea,
        uint enterpriseTelphone , 
        string enterpriseAddress,
        string pickingTim) 
        public returns (uint appleId){
            
        appleId = id;
        Enterprise memory enterpris = Enterprise({telphone:enterpriseTelphone,enterpAddress:enterpriseAddress});
        appleDatabase[appleId] =  
                    AppleInfo({
                        owner:msg.sender,
                        appleId:id, 
                        sourceArea:mySourceArea , 
                        deliverNums:0 ,
                        pickingTime:pickingTim,
                        enterprise:enterpris
                    });
        return appleId;
    }
    
    function insertApple_DeliverMessage(
        uint  id, 
        string fromR, 
        string toR, 
        string dat, 
        string del,
        uint telphone)
        public {
            AppleInfo storage apple = appleDatabase[id];
            apple.deliverMessage[apple.deliverNums++] =
                            DeliverMessage({
                                fromRegion:fromR, 
                                toRegion:toR, 
                                date:dat, 
                                deliver:del,
                                telphone:telphone});
     }
    
    function getAppleInfo(uint id) internal view returns (AppleInfo apple){
        apple = appleDatabase[id];
        return apple;
    }
    
     function getAppleDeliverMessage(uint id ) public view returns (DeliverMessage[] memory){
        AppleInfo storage apple = appleDatabase[id];
        DeliverMessage[] memory matches = new  DeliverMessage[](apple.deliverNums); 
        uint  dMessageLen = apple.deliverNums;
        for (uint i = 0 ; i < dMessageLen ; i++) {
             matches[i] = apple.deliverMessage[i];
        }
        return matches;
    }
    
}

```

