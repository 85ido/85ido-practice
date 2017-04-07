// Document Object Model
// getElementById, getElementsByTagName, getElementsByClassName
// document
//     .querySelector('.js-btn')
//     .addEventListener('click', function(e) {
//         e.target.classList.add('primary-border');
//         document.querySelector('h1').innerHTML = '你好，世界！';
//     });

// 事件监听，ajax
// document.querySelectorAll('.js-btn')
$(window).on('load', function() {
    // statement
});

$('body').on('click', '.js-btn', function(e) {
    var $target = $(e.target).addClass('secondary-border');
    $('h1').html([
        '你好，世界！',
        $target.text(),
        '<button class="js-btn">Dymaic Button</button>'
    ].join(''));
    // text val
});
/*
 * 内容：
 * html -> innerHTML
 * text -> innerText/textContent
 * val -> value 
 * 
 * 类：
 * addClass -> classList.add
 * removeClass -> classList.remove
 * toggleClass -> classList.toggle
 * hasClass -> classList.contains
 * 
 * 属性：
 * Attribute Property
 * .attr .prop .data
 */
/*
load,
click, dblclick
keydown, keyup, keypress,
change,
mouseevnter, mouseleave,
scroll
 */
// var btns = document.querySelectorAll('.js-btn');
// btns.forEach(function(btn, index) {
//     btn.addEventListener('click', function(e) {
//         e.target.classList.add('primary-border');
//         document.querySelector('h1').innerHTML = '你好，世界！' + index;
//     });
// });
// for (var i = 0; i < btns.length; i++) {
//     var btn = btns[i];
//     btn.addEventListener('click', (function(i) {
//         return function(e) {
//             e.target.classList.add('primary-border');
//             document.querySelector('h1').innerHTML = '你好，世界！' + i;
//         };
//     })(i));
// }
// bind/unbind, delegate, live/die, on/off, eventName
/*
修改内容
添加/删除类
添加/删除属性
添加/删除标签
绑定事件
 */

/*
1. 页面上有数个按钮，每个按钮有一行计数文字，点击按钮时，对应的计数文字变化

2. 当按钮点击次数与按钮在页面上的索引相同时，按钮变更样式

3. 单独的按钮用来向列表中添加按钮

4. 两个文本框一个checkbox和一个按钮，点击按钮后可以打印文本框输入的值
    当checkbox选中时，第二个文本框type="text"
 */