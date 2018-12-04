'use strict';
import { Import } from './import/import.js';
import { Mediator } from './mediator/mediator.js';

function start() {

let base = new Import();


base.httpGet('https://opentdb.com/api.php?amount=10&type=multiple')
.then(base => {
	// sorting base

	let easy = [];
	let medium = [];
	let hard = [];

	for (let key of base.results) {
		if (key.difficulty === 'easy'){
			easy.push(key);
		} else if(key.difficulty === 'medium') {
			medium.push(key);
		} else {
			hard.push(key);
		}
	}
	base.results = [...easy, ...medium, ...hard];
	if(!base.results) throw new Error('empty data');

	return base;

})
.then(base => {
		//decode received html to text

		getObjectProperties(decodeHtml, base.results)

		return base;
})
.then(base=>{
		//rendering

		let mediator = new Mediator({
			base: base,
			el: document.querySelector('.product-container')
		});

		return base;
})
.catch(error => console.error(error));

} // function start -end


//additional functions

// decode html
function decodeHtml(html) {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

// loop into object
function getObjectProperties(decodeHtml, data) {
for (let obj in data) {
    if (typeof data[obj] === 'object') {
    	let dataObj = data[obj];
outer:
        for (let key in dataObj) {
            if(typeof dataObj[key] === 'string') {
                dataObj[key] = decodeHtml(dataObj[key]);  
            } else if (typeof dataObj[key] === 'object') {
                dataObj = dataObj[key];
                getObjectProperties(decodeHtml, dataObj);
                continue outer; 
            }
        }
    }
    else {
      data[obj] = decodeHtml(data[obj]);     	
    }
}

} // end of getObjectProperties


window.addEventListener('DOMContentLoaded', start);

