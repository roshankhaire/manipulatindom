//console.log('hellow');
//var itemList=document.querySelector('#items');
/*console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);*/

//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement);
//console.log(itemList.childNodes);
//console.log(itemList.children);
//itemList.children[1].style.backgroundColor='yellow';
//console.log(itemList.firstChild);
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='hellow';
//console.log(itemList.lastElementChild);
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='hellow';
//console.log(itemList.nextSibling);   
//console.log(itemList.nextElementSibling);
//console.log(itemList.previousSibling);
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';
//var newDew=document.createElement('div');
//newDew.className='hellow';
//newDew.id='hellow123';
//newDew.setAttribute('title','hellow div');
//var newDewText=document.createTextNode('hellow world');
//newDew.appendChild(newDewText);
//var container=document.querySelector('header .container');
//var h1=document.querySelector('header h1');
//console.log(newDew);

//container.insertBefore(newDew,h1);



parentNode=document.getElementById('items');
console.log(parentNode);
console.log(parentNode.innerHTML);
PannerNode.innerHTML='<li>hellow world</li>';
parent=parentNode.innerHTML='<li>HEllo</li>'+parentNode.innerHTML;
console.log(parent);



//var newDew=document.createElement('div');
//newDew.className='hellow';
//newDew.id='hellow123';
//newDew.setAttribute('title','hellow div');
//var newDewText=document.createTextNode('hellow world');
//newDew.appendChild(newDewText);
//var container=document.querySelector('header .container');
//var h1=document.querySelector('header h1');
//console.log(newDew);

//container.insertBefore(newDew,h1);

var newDiv=document.createElement('div');
newDiv.className='hiii';
var newDivText=document.createTextNode('HEllo');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,h1);