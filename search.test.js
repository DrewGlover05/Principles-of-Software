const search = require("./search");

test("searching for valid term", () => {
  expect(search("Hello")).toBe("Searching for hello");
});

test("searching for term 'uRl'", () => {
  expect(search("uRl")).toBe("Searching for url");
});

test("searching with empty term", () => {
  expect(search(" ")).toBe("Empty search term");
});

test("searching with undefined", () => {
  expect(search()).toBe("Empty search term");
});
