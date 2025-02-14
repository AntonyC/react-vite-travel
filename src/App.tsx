import { useState } from 'react';
import reactLogo from './assets/react.svg';
import styles from './App.module.css';
import { Layout, Typography, Input } from 'antd';

function App() {
	return (
		<Layout.Header>
			<img src={reactLogo} className='logo react' alt='React logo' />
			<Typography.Title level={3}>React 旅游网</Typography.Title>
			<Input.Search placeholder={'请输入旅游目的地，主题或关键字'} />
		</Layout.Header>
	);
}

export default App;
