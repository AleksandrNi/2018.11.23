
import template from './header.pug';

export class Header {
  constructor(data) {
    this.el = data.el;
  }
	render(data) {
		this.el.innerHTML = template(data);
	}

}