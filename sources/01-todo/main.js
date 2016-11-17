/*
 * 变量
 * 数据类型
 * 方法
 * 执行流控制(if/while/for)
 * Java JavaScript
 */
// 声明一个变量，同时赋值
var varName = 3;
// 只声明
var varName;
varName = '123';
/*
    变量名的合法字符
    a-zA-Z0-9$_，不能以数字开头
 */

// 数据类型：string, number, boolean, object(array, function), undefined, null
var varName = 'hello world'; // string
"\""// 字符串中使用引号
// '' ""
varName = 3; // number
// typeof的返回值 string, number, boolean, object, undefined
// instanceof 判断变量是不是类型的实例
// Array Like
// == 和 === ==会进行隐式类型转换后比较 ===要求值和数据类型相等

// 参数
function func(a, b, c) { // 函数名字，不写匿名函数
    // 形式参数列表
    return a + 1;
    // return undefined;
}

var b = func('1');
