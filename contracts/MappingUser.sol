pragma solidity ^0.4.22;

contract MappingExample {
    mapping(uint8 => uint8) public balances;

    function update(uint8 newBalance, uint8 key) public {
        balances[key] = newBalance;
    }
}

contract MappingUser {
    function f() public returns (uint) {
        MappingExample m = new MappingExample();
        m.update(50, 1);
        return m.balances(1);
    }
}