'use strict';

let pc = require('./pc');
let mobile = require('./mobile');

let useragentArray = pc.concat(mobile);

console.log('加载测试用例...共计', useragentArray.length, '个测试用例.');

module.exports = useragentArray;
