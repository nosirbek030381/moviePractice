import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import Provider from './context';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider>
			<App />
		</Provider>
	</React.StrictMode>
);
