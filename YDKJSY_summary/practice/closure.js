function range(start, end) {
  if (Number.isInteger(start)) {
    let result = [];
    if (Number.isInteger(end) && start <= end) {
      //IF BOTH numbers are present and valid
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
      return result;
    } else if (end === undefined) {
      //IF only ONE is present and valid
      return (end) => {
        return range(start, end);
      };
    }
    return [];
  }
  return [];
}

console.log(range(3, 3)); // [3]
console.log(range(3, 8)); // [3,4,5,6,7,8]
console.log(range(3, 0)); // []

var start3 = range(3);
var start4 = range(4);
console.log("==== CALLBACK ====")
console.log(start3(3)); // [3]
console.log(start3(8)); // [3,4,5,6,7,8]
console.log(start3(0)); // []
console.log(start4(6)); // [4,5,6]
