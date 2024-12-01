// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;

const firstName = Symbol("name");
const secondName = Symbol("name");

// if (firstName === secondName) {
// This comparison appears to be unintentional because the types 'typeof firstName' and 'typeof secondName' have no overlap.
// Can't ever happen
// }
