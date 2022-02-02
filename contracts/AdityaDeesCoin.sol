// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract AdityaDeesCoin {
    //model
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    //fetch
    mapping(uint256 => Candidate) public candidates;
    //store
    uint256 public candidatesCount;

    constructor() {
        addCandidate("AdityaDS uyyy");
        addCandidate("AdityaDS Saduyyy");
    }

    function addCandidate(string memory _name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
}
