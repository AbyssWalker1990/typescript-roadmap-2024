function padLeftInitial(padding: number | string, input: string): string {
  throw new Error("Not implemented yet!");
}

// Will be an error because repeat can not use string
// function padLeft(padding: number | string, input: string): string {
//   return " ".repeat(padding) + input;
// }

// We used type guard to narrow the type of padding
function padLeftSolution(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }

  return padding + input;
}
