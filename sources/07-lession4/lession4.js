Array.from({ length: 100 }, function(x, index) {
    return index + 1;
});

new Array(100).fill(0).map(function(x, index) {
    return index + 1;
});

var arr = [
    new Date('2016-10-31'),
    new Date('2016-1-1'),
    new Date('2014-5-29'),
    new Date('2019-3-28'),
    new Date('2001-2-6')
];
arr.sort(function(dt1, dt2) {
    return dt1.getTime() - dt2.getTime();
});
console.log(arr);

/*
按参数数量分：reduce, (forEach, find, findIndex, map, filter, reduce, some, every)
按执行次数分：(forEach, filter, reduce, every), some, findIndex, map, find

常用：forEach, map, filter, find, reduce, some, (every, findIndex)
方法返回值：(map, filter), (forEach), (some, every), (findIndex), (reduce, find)
回调函数返回值：forEach, map, (filter, find, findIndex, some, every), reduce
 */
var ChineseArr = ['京东', '淘宝', '当当', '苏宁', '1号店'];
ChineseArr.sort(function(val1, val2) {
    return val1.localeCompare(val2);
});