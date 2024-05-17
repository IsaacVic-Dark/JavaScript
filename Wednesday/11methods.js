// 11.
// Write a JavaScript function to print all the methods in a JavaScript object.
// Test Data
// :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]


const returnMethods = (arr = {}) => {
    const members = Object.getOwnPropertyNames(arr);
    const methods = members.filter((method) => {
      return typeof arr[method] === "function";
    });
    return methods;
  };
  console.log(returnMethods(Array.prototype));
