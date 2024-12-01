// Extending an interface

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear = { name: "bear", honey: true };
bear.name;
bear.honey;

// Extending a type via intersections

type AnimalType = {
  name: string;
};

type BearType = AnimalType & {
  honey: boolean;
};

const bearFromType = { name: "bear", honey: true };
bear.name;
bear.honey;

// Adding new fields to an existing interface
// interface Window {
//   title: string;
// }

// interface Window {
//   ts: TypeScriptAPI;
// }

// const src = 'const a = "Hello World"';
// window.ts.transpileModule(src, {});

// type Window = {
//   title: string;
// }

// type Window = {
//   ts: TypeScriptAPI;
// }

// Error: Duplicate identifier 'Window'.
