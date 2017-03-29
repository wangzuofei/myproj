'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

function biaoYang(name){
    console.log('你真是太棒了，'+name);
}

function piPing(name){
    console.log('你真是垃圾了，'+name);
}
module.exports.biaoYang = biaoYang;
module.exports.piPing = piPing;