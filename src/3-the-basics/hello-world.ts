console.log("hello world");

// This is an industrial-grade general-purpose greeter function:
// function greet(person, date) {
//   console.log(`Hello ${person}, today is ${date}!`);
// }

// greet("Brendan");

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

// incorrect
// greet("Maddison", Date());

//correct
greet("Maddison", new Date());
