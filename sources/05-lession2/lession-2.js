/*
1. 方法的形式参数和实际参数
2. sum 函数无限参数求值的问题
3. 在函数中定义对象，函数外无法访问
4. 变量重复定义

| 串一串
| 闭包
 */
var john = {
    'class-name': 'class 1',
    name: 'John',
    age: 5,
    enable: true,
    sayHello: function() {
        
    }
};

function school(person) {
    // person === john
    var className = '';
    switch (person['class-name']) {
        case 'class 1':
            className = '一班';
            break;
        case 'class 2':
            className = '二班';
            break;
        default:
            className = '没班';
            break;
    }
    // className = person['class-name'] + '1';
    // john['class-name'] = person['class-name'] + '1';
    person['class-name'] = person['class-name'] + '1';
    return className;
}
console.log(school(john));


function school2(className) {
    // className === john['class-name'] = 'class 11'
    var cl = '';
    switch (className) {
        case 'class 1':
            cl = '一班';
            break;
        case 'class 2':
            cl = '二班';
            break;
        default:
            cl = '没班';
            break;
    }
    className = className + '2';
    return cl;
}
school2(john['class-name']);
console.log(john);
// 引用类型和值类型的传递
/* 
引用类型：object
值类型：string, number, boolean
copied
 */
// 'class 1' -> 'class 11' -> 'class 111'

function sum(args) {
    var total = 0;
    console.log(arguments);
    //   1:初始化   2:条件           3:自增
    for (var i = 0; i < args.length; i++) {
        // 4
        total += args[i];
        // total = total + args[i];
    }
    return total;
}
sum([3, 4, 5]);

function sum2() {
    var total = 0;
    /*
    prototype
    .call/.apply
     */
    var args = Array.prototype.slice.call(arguments);
    // var args = Array.from(arguments); since es6
    console.log(args.indexOf(4));
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
sum2(3, 4, 5);
/*
Array like
{ length: 0 } // number
string, Array, Object
 */

function foo() {
    var mike = {
        name: 'Mike'
    };
}
foo();
console.log(mike);
function school(className) {
    className = '';
    switch (className) {
        case 'class 1':
            // 1
            console.info(1);
            break;
        case 'class 2':
            // 2
            console.info(2);
            break;
        default:
            // 3
            console.info(3);
            break;
    }
    return className;
}
school('class 1');

/*
number => string
boolean => string

string => number
string => boolean 

number => boolean
boolean => number

ToBoolean: Boolean(val), !!val
ToNumber: parseInt(val)/parseFloat(val), Number(val)
ToString: val.toString()/val + ''
 */
var i = 0;
while (i < arguments.length) {
    i++;
}

do {
    i++;
} while (i < 10);

/*
String.prototype
'hello worl  d   '
0. 去掉 'd' 之后的空格
1. 第一个 'o' 出现的索引，最后一个 'o' 出现的索引
2. 是不是以 'he' 开头的
3. 是不是以 'ld' 结尾的
4. 如何截取 'o wo'

Array.prototype
[81, 35, 15, 49, 1]
0. 用循环打印数组中的每一项
1. 排序
2. 15 在数组中的索引
3. 获取并从数组移除 81
4. 在数组里追加 32
5. 在数组最前面添加 27

1. 声明一个对象，描述一下 John，还可以让 John 打招呼
名字，年龄，班级，班级中文
2. 求所有参数的积，建议不使用纯 for 循环
 */
function foo() {

}