let mainContainer = document.querySelector('.my_container');
let containerChildren = mainContainer.children;
function selectItem(){
    console.log(childElement);
    let childElement = mainContainer.getElementsByTagName('div');
      for(let i=0; i<childElement.length; i++){
        if(childElement[i]!==(childElement[i+1])){
            childElement[i].style.backgroundColor = 'rgba(200, 0, 0.1)';
            childElement[i].style.borderBottom = '3px solid red';
        }
        return childElement[i];
      }
    }
containerChildren.addEventListener('click', selectItem);