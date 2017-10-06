contract People {

  Person[] public people;

  struct Person {
    byte32 firstName;
    byte32 lastName;
    uint age;
  }

  function addPerson(string _firstName, string _lastName, uint _age) returns(bool success) {
    Person memory newPerson;

    newPerson.firstName = _firstName;
    newPerson.lastName = _lastName;
    newPerson.age = _age;

    people.push(newPerson);
    return true;
  }

  function getPeople() constant returns(bytes32[], bytes32[], uint[]) {

    bytes32[] firstNames;
    bytes32[] lastNames;
    

    for (uint i = 0; i < people.length; i++) {

    }
  }

}