import React from 'react';
import styles from './MainLayout.module.css';
import { Header, Footer } from '@/components';

interface PropsTypes {
	children: React.ReactNode;
}

export const MainLayout = ({ children }: PropsTypes) => {
	return (
		<>
			<Header />
			<div className={styles['page-content']}>{children}</div>
			<Footer />
		</>
	);
};
