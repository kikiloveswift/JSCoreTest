/**
 * Created by kong on 16/8/29.
 */

function sumA(a, b)
{
    return a + b;

}

function popAction(str) {

    var s = "action.back";
    var i = 0;
    for(i = 0; i<50; i++)
    {
        window.webkit.messageHandlers.btnClick.postMessage({"name":"JZ","age":"80","height":i});
    }
}

function callJsAlert() {
   	alert('Objective-C call js to show alert');
    window.webkit.messageHandlers.btnClick.postMessage({"name":"FF"});
   }

function cal() {

	window.webkit.messageHandlers.calute.postMessage({"name":"JZ"});

}
function calValueCallBackToOC() {
    location.href = "http://m.aoyou.com";
    return;

}