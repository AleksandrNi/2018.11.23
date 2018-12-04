import template from './paginator.pug';

export class Paginator {
  constructor(data) {
    this.el = data.el;
  }

	render(data) {

		this.el.innerHTML = template(data);

	}
}

