// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Election {

    //Users
    mapping(bytes32 => User) public users;
    uint public usersCount = 0;
    struct User {
        uint local;
        bytes32 pass;
    }

    //Entity id - username[]
    mapping(uint => bytes32[]) public votes;
    mapping(uint => uint) public votesCount;
    mapping(bytes32 => bool) public voters;
    uint public votersCount = 0;
    struct Stat {
        string _label;
        uint _value;
    }

    Entity[] public entities;
    uint public entityCount = 0;
    enum EntityType { LOCAL, GLOBAL }
    struct Entity {
        uint id;
        string _name;
        uint local;
        EntityType _type;
        uint _logoId;
        string _desc;
    }

    //Testing data
    constructor() {
        users[keccak256(abi.encode("8333a9942239703018ac066ec994ea1ab21caf50bc413b63fb345e181f7c3487"))] =
        User(1, keccak256(abi.encode("ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb")));
        addEntity(Entity(10, "LMP", 0, EntityType.GLOBAL, 2, "Lehet m\xC3\xA1s a politika"));
        addEntity(Entity(11, "MOMENTUM", 0, EntityType.GLOBAL, 3, "Momentum mozgalom"));
        addEntity(Entity(12, "DK", 0, EntityType.GLOBAL, 4, "Demokratikus koal\xC3\xADci\xC3\xB3"));
        addEntity(Entity(13, "FIDESZ - KDMP", 0, EntityType.GLOBAL, 5, "Fidesz - Magyar polg\xC3\xA1ri sz\xC3\xB6vets\xC3\xA9g kereszt\xC3\xA9nydemokrata n\xC3\xA9pp\xC3\xA1rt"));
        addEntity(Entity(14, "JOBBIK", 0, EntityType.GLOBAL, 6, "Jobbik magyarorsz\xC3\xA1g\xC3\xA9rt mozgalom"));

        addEntity(Entity(15, "Tenk Andr\xC3\xA1s", 1, EntityType.LOCAL, 2, "LMP"));
        addEntity(Entity(16, "N\xC3\xA9meth Szil\xC3\xA1rd Istv\xC3\xA1n", 1, EntityType.LOCAL, 5, "FIDESZ - KDMP"));
        addEntity(Entity(17, "Lehmann Viktor", 1, EntityType.LOCAL, 6, "JOBBIK"));
    }

    function addEntity(Entity memory _entity) internal {
        entities.push(_entity);
        entityCount++;
    }

    function addUser(string calldata _n, string calldata _p, uint _local) external {
        users[getHash(_n)] = User(_local, getHash(_p));
    }

    function authenticate(string calldata _n, string calldata _p) external view returns(string calldata _sess) {
        require(users[getHash(_n)].pass == getHash(_p));
        _sess = _n;
    }

    function vote(string calldata _n, uint[] calldata _v, uint _l) external {
        for(uint i = 0; i < _l; i++) {
            votes[_v[i]].push(getHash(_n));
            votesCount[_v[i]]++;
        }
        voters[getHash(_n)] = true;
        votersCount++;
    }

    function hasVote(string calldata _n) external view returns(bool _has) {
        _has = !voters[getHash(_n)];
    }

    function getEntities() external view returns(Entity[] memory _entities) {
        return entities;
    }

    function getStats() external view returns(uint _voters, uint _users) {
        _voters = votersCount;
        _users = usersCount;
    }

    function getHash(string calldata _data) internal pure returns(bytes32 _hash) {
        _hash = keccak256(abi.encode(_data));
    }
}

