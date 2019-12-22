
// console.time();
// for(var i=0; i<80; i++){
//     var aa = $('.row1:first').clone();
//     $('#aaa').append(aa);
// }
// console.timeEnd();

// console.time();
// for(var i=0; i<10; i++){
//     var aa = $('.row1:first').clone();
//     $('#aaa').append(aa);
// }
// for(var i=0; i<3; i++){
//     var aa = $('.row1').clone();
//     $('#aaa').append(aa);
// }
// console.timeEnd();

console.time();
var arr = [];
var arr1 = [];
arr[0] = $('.row1:first').clone();
for(var i=0; i<80; i++){
    arr1[0] = arr[0].slice(0);
    $('#aaa').append(arr1[0]);
}
console.timeEnd();




// console.time();
// for(var i=0; i<$('.cell').length; i++){
//     $('.cell').eq(i).css('background','red');
// }
// console.timeEnd();

// console.time();
// for(var i=0 ,len = $('.cell').length; i<len; i++){
//     $('.cell').eq(i).css('background','red');
// }
// console.timeEnd();

// console.time();
// var cell = $('.cell');
// for(var i=0 ,len = cell.length; i<len; i++){
//     cell.eq(i).css('background','red');
// }
// console.timeEnd();












