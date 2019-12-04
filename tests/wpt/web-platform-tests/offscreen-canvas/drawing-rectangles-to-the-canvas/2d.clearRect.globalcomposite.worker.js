// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.clearRect.globalcomposite
// Description:clearRect is not affected by globalCompositeOperation
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("clearRect is not affected by globalCompositeOperation");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'destination-atop';
ctx.clearRect(0, 0, 100, 50);
_assertPixel(offscreenCanvas, 50,25, 0,0,0,0, "50,25", "0,0,0,0");
t.done();

});
done();
