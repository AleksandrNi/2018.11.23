import template from './accept-button.pug';

export class AcceptButton {
  constructor(data) {
    this.el = data.el;
  }

	render(data) {

		this.startValue = data.start;
		this.continueValue = data.continue;
		this.el.innerHTML = template(data);
		this.animation();
	}

	animation() {
		  //onclick choose-button 
  document.querySelector('.product-container-middle').addEventListener('click', (e) => {
    let acceptButton = document.querySelector('.button-order');
    let acceptButtonActive = document.querySelector('.button-order-active');

    let selected = document.querySelector('.item-selected');

    if(selected && !acceptButtonActive){

	     if(acceptButton){
		     acceptButton.classList.add('button-order-active');
		     acceptButton.classList.remove('button-order')
	   		}

    } else if(!selected && acceptButtonActive){
    	acceptButton.classList.add('button-order');
    	acceptButton.classList.remove('button-order-active');
  		acceptButton.innerHTML = this.start;
    };

  })
  		//onclick accept - button
  document.querySelector('.product-container-bottom').addEventListener('click', (e) => {
  	let acceptButtonContinue = document.querySelector('.button-order-active');

 		if( acceptButtonContinue) {
 			acceptButtonContinue.classList.remove('button-order-active');
  		acceptButtonContinue.classList.add('button-order-continue');
  		acceptButtonContinue.innerHTML =  this.continueValue;
 		}
  })



	}
}