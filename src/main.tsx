import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './i18n/configs';
import { Provider } from 'react-redux';
import store from './redux/store';
// import './index.css';
// import App_Org from './App-org.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<App />
			{/* <App_Org /> */}
		</Provider>
	</StrictMode>
);
