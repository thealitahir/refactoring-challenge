const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey({key:'123'});
    expect(trivialKey).toBe("4d6e6a7bd626ee11ac93db52a0465aa5c8e2eb1801417058d1754ea2a51d5bd2a653b74b599562b00d663ea3f74ec3aff6a4420b1c49f8326ed4f4bd71340873");
  });

  it("Returns the digested string when given input is empty", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:''});
    expect(trivialKey).toBe("b7478342a465088fc33d43a64cd370737e5a3bf6749ca62c1d6db341beb987326b4df3a9f54f67a2f0ee915d4216af2f382fda14dd58dc67794f745e92d7a7f6");
  });

  it("Returns the same string when given input is string", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:'123'});
    expect(trivialKey).toBe("123");
  });
  
  it("Returns the literal string value when given input is number", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:123});
    expect(trivialKey).toBe("123");
  });

  it("Returns the digested string when given input length > 256", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:"Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more readable than the original.You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the"});
    expect(trivialKey).toBe("f87f339af1865fea7e69da90547adc8ad9a35805e6174578fb29ff0aa911fdccd41cdb2065cb9b506058f1b1afbce6277dc52ee1892a7ab256521b05563820f0");
  });
});
