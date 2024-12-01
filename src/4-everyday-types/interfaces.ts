interface Point {
  x: number;
  y: number;
}

function printCoordInterface(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoordInterface({ x: 100, y: 100 });
