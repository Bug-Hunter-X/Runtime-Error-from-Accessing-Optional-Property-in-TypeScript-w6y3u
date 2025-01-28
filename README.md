This code demonstrates a common runtime error in TypeScript related to optional properties.  The `printName` function accepts an object with a required `firstName` and an optional `lastName`. If a caller omits `lastName`, accessing it within the function will throw a runtime error because it's `undefined`.  The solution demonstrates how to safely handle optional properties.