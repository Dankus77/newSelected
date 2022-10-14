/*let mainList = document.querySelector('.my_container');
let ListElement = mainList.childNodes;
ListElement.addEventListener('click', function toggleSelect(event){
event.target.style.userSelect = 'all';
//event.getElementsByTagName('div').target.style.borderBottom = '3px solid transparent';
});*/

let vegetables = document.querySelectorAll('.vegetable');
vegetables.forEach((el)=>{
  el.addEventListener('click', (ev) =>{
    removeClass(vegetables)
    ev.target.classList.add('item_selected');
  });
  
});

const removeClass = arr =>{
  for(let i = 0; i < arr.length; i++){
    arr[i].classList.remove('item_selected');
  }
}