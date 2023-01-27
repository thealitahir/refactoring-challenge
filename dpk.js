const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const MAX_PARTITION_KEY_LENGTH = 256;
  let partitionKey = "0";
  if (event && event.partitionKey) {
    partitionKey = event.partitionKey;
  } else if (event) {
    partitionKey = JSON.stringify(event);
    partitionKey = hashDigestKey(partitionKey);
  }

  if (typeof partitionKey !== "string") {
    partitionKey = JSON.stringify(partitionKey);
  }

  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    partitionKey = hashDigestKey(partitionKey);
  }

  return partitionKey;
};

function hashDigestKey(key){
  return crypto.createHash("sha3-512").update(key).digest("hex")
}