import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './i18n/configs';
import { Provider } from 'react-redux';
import rootStore from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import './index.css';
// import App_Org from './App-org.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={rootStore.store}>
			<PersistGate persistor={rootStore.persistor}>
				<App />
			</PersistGate>
			{/* <App_Org /> */}
		</Provider>
	</StrictMode>
);
