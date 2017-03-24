/*
 * 变量
 *  数据类型
 *  声明变量
 *  | 类型转换
 *  | 数组
 *  | 引用类型和值类型
 * 流程控制
 *  if
 *  switch
 *  | while
 *  | for
 * 逻辑判断
 *  and
 *  or
 * 函数
 */
// var 变量名 = 值;
// number, string, boolean, object, undefined, null, function
// [a-zA-Z_$0-9]
var name = 'John';
var $ = '';
var _ = '';
var name;
name = 'John'; // string
name = 5; // number
name = true; // boolean
// true false
// key: value
var john = {
    'class-name': 'Class 1',
    name: 'John',
    age: 5,
    enable: true,
    sayHello: function() {
        
    }
};
// 1. 函数：John 自我介绍
// name, age, class-name
// 2. John 的学历，enable = false 就不能上学
// 3. 打印班级的中文名字：Class 1 -> 一班， Class 2 -> 二班， Class 3
// 4*. sum 能不能实现求所有参数的和

typeof sum; // 'string', 'number', 'undefined', 'boolean', 'object', 'function'
function sum(num1, num2) {
    // num1, num2 形式参数
    return num1 + num2;
    // return undefined;
}
function func() {
    // 声明提前
    console.log(a);
    var a = 5;
    return a;
}
var foo = function() {

}
sum(3, 5); // 实际参数
// ---------------------------------
function canStudy() {
    // > < >= <= == != === !==
    // && and || or ! not
    // true && false > false
    // true || false > true
    if (!john) {
        console.log('have not john');
        return;
    }
    // falsy
    // undefined, 0, '', null, NaN

    if (john.age > 6) { // boolean
        console.log('school');
    } else if (john.age > 6 && john.age <= 12) {
        console.log('小学');
    } else if (john.age > 12 && john.age <= 16) {

    } else if (john.age > 16 && john.age <= 18) {

    } else {
        
    }
    // if ...
    // if ... else ...
    // if ... else if ... else ...
}

function getScoreDescription(score) {
    var desc = '';
    if (score === 10) {
        desc = '满分';
    } 
    else if (score >= 9 && score < 10) {
        desc = '优秀';
    }
    else if (score >= 8 && score < 9) {
        desc = '良好';
    }
    else if (score >=6 && score < 8) {
        desc = '及格';
    }
    else {
        desc = '不及格';
    }
    return desc;
}
function goFloor(floor) {
    // if (floor === 2) {
    //     return '二层到了';
    // }
    // else if (floor === 3) {
    //     return '三层到了';
    // }
    // else if (floor === 4) {
    //     return '四层到了';
    // }
    // else {
    //     return '到不了';
    // }
    var floorStr = '';
    switch (floor) {
        case 2:
            floorStr = '二层到了';
            break;
        case 3:
            floorStr = '三层到了';
            break;
        case 4:
            floorStr = '四层到了';
            break;
        default:
            floorStr = '到不了';
            break;
    }
    return floorStr;
}
// switch
// loop



