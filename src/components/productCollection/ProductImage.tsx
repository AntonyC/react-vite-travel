import { Image, Typography } from 'antd';
import { Link } from 'react-router-dom';

interface PropsType {
	id: string | number;
	size: 'large' | 'small';
	imageSrc: string;
	price: number | string;
	title: string;
}

export const ProductImage = ({
	id,
	size,
	imageSrc,
	price,
	title,
}: PropsType) => {
	return (
		<Link to={`/detail/${id}`}>
			{size == 'large' ? (
				<Image src={imageSrc} height={285} width={490} />
			) : (
				<Image src={imageSrc} height={120} width={240} />
			)}
			<div>
				<Typography.Text type='secondary'>{title.slice(0, 12)}</Typography.Text>
				<Typography.Text type='danger' strong>
					¥ {price} 起
				</Typography.Text>
			</div>
		</Link>
	);
};
