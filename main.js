'use strict'
//引入一个模块
var mh = require('./hello');
var s = '郭美如 王若楠';

mh.biaoYang(s);
mh.piPing(s);

process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');

var fs = require('fs');

fs.readFile('./txtFile/sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});