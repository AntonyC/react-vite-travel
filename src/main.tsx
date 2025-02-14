import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
// import './index.css';
// import App_Org from './App-org.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
		{/* <App_Org /> */}
	</StrictMode>
);
