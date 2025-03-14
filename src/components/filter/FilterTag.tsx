import React, { useState } from 'react';
import { Tag } from 'antd';
const { CheckableTag } = Tag;

interface PropsType {
	onSelect?: () => void;
	children?: React.ReactNode;
}

export const FilterTag = (props: PropsType) => {
	const [checked, setChecked] = useState(false);

	const handleChange = checked => {
		setChecked(checked);
	};

	return <CheckableTag {...props} checked={checked} onChange={handleChange} />;
};
