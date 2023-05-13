
empty_arr = [];
nums = [5, 6, 4, 7, 3, 8, 2, 9];

var mach = 0;
var description = [];
var code = [];
var output = [];

code.push([]);
output.push([]);
description.push("Making a 'first' function. Defined as first(arr) it takes one argument, the array, and returns it's first element. That's it.");
function first(arr) {
    return arr[0];
}

code[mach].push("nums: ");
output[mach].push(nums);
code[mach].push("first(nums):");
output[mach].push(first(nums));
mach ++;
// console.log("first(nums, 4)");
// console.log(first(nums, 4));
// console.log("first(nums, -1)");
// console.log(first(nums, -1));
// console.log("first(nums, 0)");
// console.log(first(nums, 0));
// console.log("first([])");
// console.log(first([]));
// console.log("first('apples')");
// console.log(first('apples'));

code.push([]);
output.push([]);
description.push("'first' V2: now can take an 'n' argument to return the first n elements of the array.");
function first(arr, n) {
    if (n) {
        result = [];
        for (var i = 0; i < n; i++) {
            result.push(arr[i]);
        }
        return result;
    }
    return arr[0];
}
code[mach].push("nums: ");
output[mach].push(nums);
code[mach].push("first(nums, 4)");
output[mach].push(first(nums, 4));

for (var i = 0; i <= mach; i++) {
    console.log(description[i]);
    var tests = code[i].length;
    for (var j = 0; j < tests; j++) {
        console.log(code[i][j]);
        console.log(output[i][j]);
    }
}
// console.log(description);