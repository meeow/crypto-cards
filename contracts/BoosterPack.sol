pragma solidity ^0.4.22;


contract Card {
    
    uint8 Rarity;
    uint8 Class;
    address Card_Owner;
    
    constructor(uint8 rarity, uint8 class, address owner) public {
        Rarity = rarity;
        Class = class;
        Card_Owner = owner;
    }
}

contract BoosterPack {

    address public owner;
    Card[] cards;
    
    uint nonce = 0;
    function rand(uint min, uint max) public returns (uint){
        nonce++;
        return uint(sha3(nonce))%(min+max)-min;
        
    }
    
    function GenerateCard(bool guaranteedRare) public returns (bool) {
        uint class_percent = rand(1, 100);
        uint rarity_percent = rand(1, 100);
        uint8 class;
        uint8 rarity;
        Card newCard;
        if (class_percent < 25) {
            class = 0;
        }
        else if (class_percent < 50) {
            class = 1;
        }
        else if (class_percent < 75) {
            class = 2;
        }
        else {
            class = 3;
        }
        
        if (guaranteedRare) {
            if (rarity_percent < 33) {
                rarity = 0;
                newCard = new Card(rarity, class, owner);
                cards.push(newCard);
            }
            else {
                rarity = 1;
                newCard = new Card(rarity, class, owner);
                cards.push(newCard);
            }
        }
        
        if (rarity_percent < 10) {
            rarity = 0;
            newCard = new Card(rarity, class, owner);
            cards.push(newCard);
        }
        else if (rarity_percent >= 10 && rarity_percent < 30) {
            rarity = 1;
            newCard = new Card(rarity, class, owner);
            cards.push(newCard);
        }
        else if (rarity_percent >= 30 && rarity_percent < 60) {
            rarity = 2;
            newCard = new Card(rarity, class, owner);
            cards.push(newCard);
            return false;
        }
        else {
            rarity = 3;
            newCard = new Card(rarity, class, owner);
            cards.push(newCard);
            return false;
        }
        return true;
    }
    
    constructor() {
        owner = msg.sender;
        bool atLeastOneRare = false;
        for (int i = 0; i < 5; i++) {
            if (i == 4 && !atLeastOneRare) {
                atLeastOneRare = true;
                GenerateCard(true);
            }
            else {
                if (GenerateCard(false))
                    atLeastOneRare = true;
            }
        }
    }
    
}
