const Registration = artifacts.require("./Registration.sol");

contract("Marketplace", (accounts) => {
  let registration;

  before(async () => {
    registration = await Registration.deployed();
  });

  describe("deployment", async () => {
    it("deploys successfully", async () => {
      const address = await registration.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it("has a name", async () => {
      const name = await registration.name();
      assert.equal(name, "Student Course Registration");
    });
  });

  describe("Courses Initialization", async () => {
      
  })

  describe("Test", async () => {
    it("Function returns test", async () => {
      const result = await registration.test();
      
    //   console.log(result.logs[0].args.test);
      assert.equal(result.logs[0].args.test, "message test");
    });
  });
});
