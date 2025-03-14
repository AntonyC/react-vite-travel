import { List } from 'antd';
import { Comment } from '@ant-design/compatible';

interface PropsType {
	data: {
		author: string;
		avatar: string;
		content: string;
		createDate: string;
	}[];
}

export const ProductComments = ({ data }: PropsType) => {
	return (
		<List
			dataSource={data}
			itemLayout='horizontal'
			renderItem={item => {
				return (
					<li>
						<Comment
							author={item.author}
							avatar={item.avatar}
							content={item.content}
							datetime={item.createDate}
						/>
					</li>
				);
			}}></List>
	);
};
