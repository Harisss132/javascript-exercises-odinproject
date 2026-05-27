// const reverseString = function(str) {
//     return str.split('').reverse().join('')
// };

// const reverseString = (str) => {
//     let hasil = "";
//     for(let i = str.length - 1 ; i >= 0 ; i--) {
//         hasil += str[i];
//     }
//     return hasil;
// }

const reverseString = (str) => {
    let hasil = "";
    for(let karakter of str) {
        hasil = karakter + hasil;
    }
    return hasil;
}

reverseString("");
// Do not edit below this line
module.exports = reverseString;
