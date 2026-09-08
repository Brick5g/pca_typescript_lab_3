// Write a function called `printValue` that takes a single parameter `value`.
// The value can be a string, number, or boolean.

function printValue(value: string | number | boolean): void {
  if (typeof value === "string") {
    console.log(`String value: ${value}`);
  } else if (typeof value === "number") {
    console.log(`Number value: ${value}`);
  } else if (typeof value === "boolean") {
    console.log(`Boolean value: ${value}`);
  } else {
    console.log("Unknown type");
  }
}

// Use `typeof` to determine the type and print a different message for each:
// - string: print "String value: <value>"
// - number: print "Number value: <value>"
// - boolean: print "Boolean value: <value>"
