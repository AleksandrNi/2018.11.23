import template from './choose-button.pug';

export class ChooseButton {
  constructor(data) {
    this.el = data.el;
  }

	render(data) {
		this.el.innerHTML = template(data);
    this.animation();
	}

	animation() {

	//onmouseover
  document.addEventListener('mouseover', function (e){
  	let item  = e.target.closest('.item');
  	if(item) item.classList.toggle('item-text-hover');
  })
  //onmouseout
  document.addEventListener('mouseout', function (e){
  	let item  = e.target.closest('.item');
    if(item) item.classList.toggle('item-text-hover');
  })
  //onclick
  document.querySelector('.product-container-middle').addEventListener('click', function (e){
    let item  = e.target.closest('.item');
      if(item ){
        let itemText = item.querySelector('.item-text');
        let selected = document.querySelector('.item-selected');
      if(selected){
        selected.classList.toggle('item-selected');
      };
      item.classList.toggle('item-selected');
      }

  })
	}

}