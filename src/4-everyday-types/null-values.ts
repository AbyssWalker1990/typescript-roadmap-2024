function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

// non null assertion
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
