import _ from 'lodash';
import '../css/app.css';

// ES6 function style
let loader = () => {
    console.log('This is loaded...');
}

// Old function style
function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Webpack...'], ' ');
    element.className = 'append-text center';

    loader();

    return element;
}

document.body.appendChild(component());
