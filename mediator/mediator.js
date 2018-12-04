import { Header } from '../blocks/header/header.js';
import { ChooseButton } from '../blocks/choose-button/choose-button.js';
import { AcceptButton } from '../blocks/accept-button/accept-button.js';
import { Paginator } from '../blocks/paginator/paginator.js';



export class Mediator  {

constructor(data) {

  this.el = data.el;
  this.data = data.base.results;
  this.counter = 0;

  this.render(this.data);

  document.addEventListener('click',(e) =>{
    let acceptContinue  = e.target.closest('.button-order-continue');
    let wrong = document.querySelector('.item-selected__wrong');  
    if(!wrong && acceptContinue && this.counter <10) this.comparison();
  })

}

render(data) {

  this.header = new Header({
    el: document.querySelector('.product-container-top')
  });
  this.chooseButton = new ChooseButton({
    el: document.querySelector('.product-container-middle')
  });
  this.acceptButton = new AcceptButton({
    el: document.querySelector('.product-container-bottom')
  }); 
  this.paginator = new Paginator({
    el: document.querySelector('.paginator')
  });
 
//get datas from defaultLoad
  let i = this.counter;
  let arrRightAnswers = [];

//rendering condition
  if(i < this.data.length) {

//sorting answers
  let correctAnswer = this.data[i].correct_answer;
  arrRightAnswers.push(correctAnswer);
  let incorrectAnswers = this.data[i].incorrect_answers;
  let answers = [correctAnswer,...incorrectAnswers];
  answers.sort();

//rendering  
    this.header.render({
      header: this.data[i].category,
      number: 'Q:'+(i+1),

      question: this.data[i].question
    });

    this.chooseButton.render(answers);
    this.acceptButton.render({
      start: 'OK',
      continue: 'Continue'
    });
    this.paginator.render({
      quantity: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      number: this.counter,
    })
  } 

this.arrRightAnswers = arrRightAnswers;

}
// comparison right and user's answers
comparison () {
  let rightAnswer = this.arrRightAnswers[this.counter]
  let selected = document.querySelector('.item-selected');
  if(selected) {
      let userAnswer = selected.querySelector('.item-text').innerHTML;


  //rightAnswer === userAnswer
    if(rightAnswer === userAnswer) {
      selected.classList.add('item-selected__right')
      let divImage = selected.querySelector('.item-image-answer');
      let image  = new Image();
      image.src = '../images/right.png'
      divImage.append(image);
      this.counter++;

      if(this.counter === 10) {
        console.log('You WIN !!!');
      }

    } else{        
      selected.classList.add('item-selected__wrong')
      let divImage = selected.querySelector('.item-image-answer');
      let image  = new Image();
      image.src = '../images/wrong.png'
      divImage.append(image);
      console.log('You\'ve lost');
    }
  }

  document.querySelector('.product-container-bottom').addEventListener('click', (e) => {
    let acceptButtonRight = document.querySelector('.item-selected__right');
    if( acceptButtonRight) {
       this.render(this.data);
    } 
  })

} // end of comparison
} // end of Mediator
