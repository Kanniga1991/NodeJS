//console.log("hello world");
var arr = [1, 1, 2, 3, 1, 4, 2, 3, 5]

// let arr1 = [... new Set(arr)]
// console.log(arr1); // [1,2,3,4,5]
// var arr_res = {
//     1 : 3, //1 is the number and 3 is the repitition in the array
//     2 : 2,
//     3 : 2,
//     4 : 1,
//     5 : 1,
// };
var arr_res={};

arr.forEach(ele => {
    // if(typeof arr_res[ele]=="undefined"){
    //     arr_res[ele] = 1;
    // }else{
    //     arr_res[ele] += 1;
    // }
    //console.log("old", ele, arr_res);
    arr_res[ele] = typeof arr_res[ele]=="undefined" ? 1 : arr_res[ele] + 1;
    //console.log("new", ele , arr_res);
})
let duplicate = [];
let distinct = [];

for (i in arr_res) //arr_res is the object created and stored key and value
{
    const repetition = arr_res[i];
    //console.log(i, repetition);
    if(repetition > 1)
    {
        duplicate.push(+i);
    }
    else
    {
        distinct.push(+i);
    }
}
console.log(duplicate)
console.log(distinct)