var navOld = document.getElementById('navBar');
navOld.setAttribute('id', 'topnavigation');

var createli = document.createElement('li');
var newText = document.createTextNode('Technology we use');

createli.appendChild(newText);
navOld.firstElementChild.appendChild(createli);

var ul = document.getElementById('topnavigation').firstElementChild;

var topNav = document.getElementById('topnavigation');
var first = ul.firstElementChild;
var last = ul.lastElementChild;

document.write(first.firstChild.firstChild.nodeValue + "<br>")
document.write(last.firstChild.nodeValue)