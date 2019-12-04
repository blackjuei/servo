// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.pattern.paint.orientation.image
// Description:Image patterns do not get flipped when painted
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Image patterns do not get flipped when painted");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
var promise = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", '/images/rrgg-256x256.png');
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = function() {
        resolve(xhr.response);
    };
});
promise.then(function(response) {
    var pattern = ctx.createPattern(response, 'no-repeat');
    ctx.fillStyle = pattern;
    ctx.save();
    ctx.translate(0, -103);
    ctx.fillRect(0, 103, 100, 50);
    ctx.restore();
    ctx.fillStyle = '#0f0';
    ctx.fillRect(0, 0, 100, 25);
    _assertPixel(offscreenCanvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
    _assertPixel(offscreenCanvas, 98,1, 0,255,0,255, "98,1", "0,255,0,255");
    _assertPixel(offscreenCanvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");
    _assertPixel(offscreenCanvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255");
}).then(t_pass, t_fail);

});
done();
