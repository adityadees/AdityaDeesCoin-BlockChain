var AdityaDeesCoin = artifacts.require("./AdityaDeesCoin.sol");

contract("AdityaDeesCoin", function (accounts) {
    var adityadeescoinInstance;
    it("init candidates", function () {
        return AdityaDeesCoin.deployed().then(function (instance) {
            return instance.candidatesCount();
        }).then(function (count) {
            assert.equal(count, 2);
        })
    });

    it("correct values", function () {
        return AdityaDeesCoin.deployed().then(function (instance) {
            adityadeescoinInstance = instance;
            return adityadeescoinInstance.candidates(1);
        }).then(function (candidate) {
            assert.equal(candidate[0], 1, "corect ID");
            assert.equal(candidate[1], "AdityaDS uyyy", "corect Name");
            assert.equal(candidate[2], 0, "corect votes count");
            return adityadeescoinInstance.candidates(2);
        }).then(function (candidate) {
            assert.equal(candidate[0], 2, "corect ID");
            assert.equal(candidate[1], "AdityaDS Saduyyy", "corect Name");
            assert.equal(candidate[2], 0, "corect votes count");
        });
    });
});