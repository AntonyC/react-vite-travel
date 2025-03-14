import React from 'react';
import styles from './UserLayout.module.css';
import logo from '@/assets/logo.svg';
import { Link } from 'react-router-dom';
import { CaretDownOutlined } from '@ant-design/icons';
import { Layout, Dropdown } from 'antd';
const { Header, Footer, Content } = Layout;

interface PropsTypes {
	children: React.ReactNode;
}

export const UserLayout = (props: PropsTypes) => {
	const menuProps = {
		items: [
			{ key: 'zh', label: '中文' },
			{ key: 'en', label: 'English' },
		],
	};

	return (
		<Layout className={styles['user-layout-container']}>
			<Header className={styles['header']}>
				<div className={styles['lang']}>
					<Dropdown.Button menu={menuProps} icon={<CaretDownOutlined />}>
						选择语言
					</Dropdown.Button>
				</div>
			</Header>
			<Content className={styles['content']}>
				<div className={styles['top']}>
					<div className={styles['content-header']}>
						<Link to='/'>
							<img alt='logo' className={styles['logo']} src={logo} />
							<span className={styles['title']}>React Vite Travel</span>
						</Link>
					</div>
					<div className={styles['desc']}>Travel makes life better</div>
					{props.children}
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>I am footer component</Footer>
		</Layout>
	);
};
