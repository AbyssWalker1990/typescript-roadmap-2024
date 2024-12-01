const someCondition = true;

const obj = { counter: 0 };
if (someCondition) {
  obj.counter = 1;
}

declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);
// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.

declare function handleRequestFixed(url: string, method: "GET" | "POST"): void;

const reqFixed = { url: "https://example.com", method: "GET" as "GET" };
handleRequestFixed(req.url, req.method as "GET");

// Another way to make the whole obj literal
const reqLiteral = { url: "https://example.com", method: "GET" } as const;
handleRequestFixed(reqLiteral.url, reqLiteral.method);
