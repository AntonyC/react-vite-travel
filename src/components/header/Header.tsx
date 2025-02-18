import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import {
	LanguageActionTypes,
	addLanguageActionCreator,
	changeLanguageActionCreator,
} from '../../redux/language/languageActions';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const params = useParams();
	const language = useSelector(state => state.language);
	const languageList = useSelector(state => state.languageList);
	// const dispatch = useDispatch();
	const dispatch = useDispatch<Dispatch<LanguageActionTypes>>();
	const { t } = useTranslation();

	const menuClickHandler = e => {
		console.log(e);
		if (e.key === 'new') {
			// 处理新语言添加action
			dispatch(addLanguageActionCreator('新语言', 'new_lang'));
		} else {
			dispatch(changeLanguageActionCreator(e.key));
		}
	};

	return (
		<div className={styles["app-header"]}>
			{/* top-header */}
			<div className={styles["top-header"]}>
				<div className={styles.inner}>
					<Typography.Text>让旅游更幸福</Typography.Text>
					<Dropdown.Button
						style={{ marginLeft: 15 }}
						overlay={
							<Menu
								onClick={menuClickHandler}
								items={[
									{ key: "1", label: "中文" },
									{ key: "2", label: "English" },
								]}
							/>
						}
						icon={<GlobalOutlined />}>
						语言
					</Dropdown.Button>
					<Button.Group className={styles["button-group"]}>
						<Button>注册</Button>
						<Button>登陆</Button>
					</Button.Group>
				</div>
			</div>
			<Layout.Header className={styles["main-header"]}>
				<img src={logo} alt='logo' className={styles["App-logo"]} />
				<Typography.Title level={3} className={styles.title}>
					React旅游网
				</Typography.Title>
				<Input.Search
					placeholder={"请输入旅游目的地、主题、或关键字"}
					className={styles["search-input"]}
				/>
			</Layout.Header>
			<Menu
				mode={"horizontal"}
				className={styles["main-menu"]}
				items={[
					{ key: '1', label: t('header.home_page') },
					{ key: '2', label: t('header.weekend') },
					{ key: '3', label: t('header.group') },
					{ key: '4', label: t('header.backpack') },
					{ key: '5', label: t('header.private') },
					{ key: '6', label: t('header.cruise') },
					{ key: '7', label: t('header.hotel') },
					{ key: '8', label: t('header.local') },
					{ key: '9', label: t('header.theme') },
					{ key: '10', label: t('header.custom') },
					{ key: '11', label: t('header.study') },
					{ key: '12', label: t('header.visa') },
					{ key: '13', label: t('header.enterprise') },
					{ key: '14', label: t('header.high_end') },
					{ key: '15', label: t('header.outdoor') },
					{ key: '16', label: t('header.insurance') },
				]}
			/>
		</div>
	);
};
