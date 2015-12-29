var bigObject = {
    client:{
        'auth':1,
        'country':15,
        'user_id':1316912951,
        'version':2720,
        'environment':'production',
        'error_log_url':'https:\/\/my.logpacker.com\/api-test?m=js',
        'browser':window.navigator.userAgent,
        'page_url':window.location.href
    },
    messages:[]
};
window.onerror = function(msg, url, line, col, error) {
    bigObject.messages.push({
        'messageText':msg,
        'jsFileURL':url,
        'lineNumber':line,
        'col':col,
        'error':error
    });
    setTimeout(function(){
        if(bigObject.messages.length>0){
            postErrorJSON(bigObject);
            bigObject.messages = [];
        };
    }, 500);
};
function postErrorJSON(bigObject){
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
        var scripturl = bigObject.client.error_log_url;
        xhr.open('POST', scripturl);
        xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
        xhr.send(bigObject);
    }
    return true;
};