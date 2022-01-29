import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import registerServiceWorker from './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.min.css';

import './css/index.css';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
