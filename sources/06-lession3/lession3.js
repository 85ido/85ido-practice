var str = 'hello worl  d   ';
console.log(str.trim());
console.log(str.indexOf('o'));
console.log(str.lastIndexOf('o'));
console.log(str.startsWith('he'));
console.log(str.endsWith('ld'));

// begin end
console.log(str.substring(4, 8));
// from length
console.log(str.substr(4, 4));

console.log(str.slice(4, 8));
console.log(str);

function shuzu(){
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// shuzu();
arr.forEach(function(x) {
    console.log(x);
});
console.log(arr);

// [81, 36, 17, 52, 5, 9]

var sz=[];
for(i=0;i<arr.length;i++){
    sz[i] = arr[i] + i;
}
console.log(sz);
arr.map(function(x, index) {
    return x + index;
});
var num = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        num = arr[i];
        break;
    }
}
arr.filter(function(x) { return x % 3 === 0; });

// forEach, find, findIndex, map, filter, reduce, some, every
// 执行次数，退出条件，返回值的处理
// arr.methodName(function(item) {

// });
var arr = [81, 35, 15, 49, 1, 4];
// 循环使数组中的每一项执行函数，返回值没用，不会中途退出
arr.forEach(function(x, index, array) {
    console.log('x=' + x + ',index=' + index + ',array=' + array);
    console.log(`x=${x},index=${index},array=${array}`);
});
// 使数组中的每一项执行函数，返回值作为新数组的元素，不会中途退出
// 做转换
arr.map(function(x, index) {
    if (x === 35) {
        return undefined;
    }
    return x + index;
});
// 使数组中的每一项执行函数，返回是新数组，长度不一定与源数组一致；返回值为true的会出现在新数组里，不能中途退出
arr.filter(function(x, index) {
    console.log(index);
    return x % 3 === 0;
});
arr.filter(function(x) { return x.selected; });
// find 只找第一个，找到就停，找不到返回undefined
var packageInfo = packageInfos.find(function(x) { return x.id === selectedId; });
arr.find(function(x, index) {
    console.log(index);
    return x % 3 === 0;
});
arr.reduce(function(prevVal, x, index, array) {
    return prevVal * x;
}, 1);
arr.some(function(x, index) {
    console.log(index);
    return x % 7 === 0;
});
