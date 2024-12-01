type PointXY = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoordXY(pt: PointXY) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

type ID = number | string;

type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return String(str);
}

// Create a sanitized input
let userInput = sanitizeInput("input");

// Can still be re-assigned with a string though
userInput = "new input";
