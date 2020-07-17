// Set options
marked.setOptions({
 headerIds: false
});

//Function for reading MD file
function readFile(file, out) {
    var http = new XMLHttpRequest();
    http.open('get', file);
    http.onreadystatechange = function () {
        document.getElementById(out).innerHTML = marked(http.responseText);//.replace(/\n/g, '<br>'));
    };
    http.send();
}