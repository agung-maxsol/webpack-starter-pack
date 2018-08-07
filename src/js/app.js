import _ from 'lodash';
import '../css/app.css';

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Webpack...'], ' ');
    element.className = 'append-text';

    return element;
}

document.body.appendChild(component());
