// 1.Write a program to shuffle an given array

let array = [10, 11, 24, 35, 74, 15, 26, 77];
function shuffle(arr) {
    let value = arr.length, temp, index;
    while (value > 0) {
        index = Math.floor(Math.random() * value);
        value--;
        temp = arr[value];
        arr[value] = arr[index];
        arr[index] = temp;
    }
    return arr;
}
console.log(shuffle(array));