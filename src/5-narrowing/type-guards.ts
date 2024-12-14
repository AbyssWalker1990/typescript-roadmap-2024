//Here 'strs' is possibly 'null'
// function printAll(strs: string | string[] | null) {
//   if (typeof strs === "object") {
//     for (const s of strs) {
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     console.log("do nothing");
//   }
// }

function printAllSolution(strs: string | string[] | null) {
  if (typeof strs === "object" && strs !== null) {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    console.log("do nothing");
  }
}
